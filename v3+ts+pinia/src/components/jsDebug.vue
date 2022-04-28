<template>
  <div id="root" style="width: 800px; height: 600px" ref="root"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  reactive,
  nextTick,
  watch,
} from "vue";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

export default defineComponent({
  emits: { contentChange: null },
  setup(_, context) {
    let theme = ref("light");
    const root = ref<HTMLElement>();
    let editor: monaco.editor.IStandaloneCodeEditor;
    const property = reactive({
      language: "javascript",
      fullscreen: false,
    });
    onMounted(() => {
      nextTick(() => {
        // 创建编辑器 (可以设置诸多配置)
        editor = monaco.editor.create(root.value as HTMLElement, {
          language: property.language,
          value: "",
          theme: theme.value === "light" ? "vs" : "vs-dark",
        });

        editor.onDidChangeModelContent(() => {
          // 监听编辑器的内容的变化,拿到编辑器里的内容  (此处可以加个防抖)
          context.emit("contentChange", editor.getValue());
        });
      });
    });
    onUnmounted(() => {
      editor.dispose(); // 销毁
    });
    watch(theme, (val) => {
      if (val === "light") {
        monaco.editor.setTheme("vs");
      } else if (val === "dark") {
        monaco.editor.setTheme("vs-dark");
      }
    });

    const languageChange = (value: string) => {
      // 语言变化,设置编辑器的语言(java/javascript/typescript...)
      property.language = value;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      monaco.editor.setModelLanguage(editor.getModel(), value);
    };
    const screenChange = (value: any) => {
      // 使用layout方法设置编辑器大小
      property.fullscreen = value;
      if (value) {
        editor.layout({
          height: 500,
          width: 500,
        });
      } else {
        nextTick(() => {
          editor.layout({
            height: 500,
            width: 500,
          });
        });
      }
    };
    return {
      root,
      languageChange,
      property,
      screenChange,
    };
  },
});
</script>
