<template>
  <div class="main-c">
    <h1>创建HTML5 canvas事件交互</h1>
    <div class="mycanvas">
      <canvas id="tutorial" width="600px" height="600px" ref="canvas" style="border: 1px solid #999;"></canvas>
      <div class="canvashover" v-if="isShowHover"
        :style="{ left: '0px', top: '0px', transform: `translate(${hoverstyle.left}px, ${hoverstyle.top}px)` }">
        <ul>
          <span>名称:</span>{{
              hoverItem.item.name
          }}
        </ul>
        <ul>
          <span>战斗力:</span>{{
              hoverItem.item.num
          }}
        </ul>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// import throttle from '../../utils/debounce.js'
/** @type {HTMLCanvasElement} */
export default {
  name: 'HTML5canvas',
  data() {
    return {
      canvas: null,
      ctx: null,
      isFill: false,
      isShowHover: false,
      hoverstyle: {
        left: 300,
        top: 300
      },
      hoverItem: {
        item: {}
      },
      allArcs: [],
      r: 150,
      count: [
        {
          name: '脚盆鸡',
          num: 30
        },
        {
          name: '棒子',
          num: 60
        },
        {
          name: '长鼻象',
          num: 50
        },
        {
          name: '小兔子',
          num: 99
        },
        {
          name: '鹰酱',
          num: 99
        },
        {
          name: '毛熊',
          num: 80
        }
      ],
      colors: ['#eeeeee', 'HotPink', 'green', 'red', 'blue', '#d4d4d5']
    }
  },
  mounted() {
    // 获取canvas元素
    this.canvas = document.getElementById('tutorial')
    // 获取绘制二维上下文
    this.ctx = this.canvas.getContext('2d')
    this.initcanvas()
    this.drawarc()
    this.addlistenCanvas()
  },
  methods: {
    initcanvas() {
      if (this.count && this.count.length > 0) {
        let allcount = this.count.reduce((a, b) => {
          return a + b.num
        }, 0)
        console.log(allcount)
        let newdegree = 0
        this.count.forEach((p, index) => {
          let jd = (p.num / allcount) * 2 * Math.PI
          this.allArcs.push({
            item: p,
            startdegree: newdegree,
            enddegree: jd + newdegree,
            fillStyle: this.colors[index]
          })
          newdegree += jd
        })
      }
    },
    drawarc() {
      this.ctx.clearRect(0, 0, 600, 600)
      this.allArcs.forEach((p) => {
        if (p.hover) {
          this.ctx.beginPath()
          this.ctx.shadowColor = 'rgba(0, 0, 0, 0.55)'
          this.ctx.shadowOffsetX = '-5'
          this.ctx.shadowOffsetY = '5'
          this.ctx.shadowBlur = '10'
          this.ctx.moveTo(300, 300)
          this.ctx.arc(300, 300, this.r + 6, p.startdegree, p.enddegree, false)
          this.ctx.closePath()
          this.ctx.fillStyle = p.fillStyle
          this.ctx.fill()
        } else {
          this.ctx.beginPath()
          this.ctx.shadowColor = 'none'
          this.ctx.shadowOffsetX = '0'
          this.ctx.shadowOffsetY = '0'
          this.ctx.shadowBlur = '0'
          this.ctx.moveTo(300, 300)
          this.ctx.arc(300, 300, this.r, p.startdegree, p.enddegree, false)
          this.ctx.closePath()
          this.ctx.fillStyle = p.fillStyle
          this.ctx.fill()
        }
      })
    },
    addlistenCanvas() {
      // 事件绑定(这里有一个要注意的，我这里用了bind方法，是为了将“mousedownEvent”方法内的this指向切换到Canvas)
      this.canvas.addEventListener('mousemove', this.mousehoverEvent.bind(this)) // 点击事件

      // 事件绑定(这里有一个要注意的，我这里用了bind方法，是为了将“mousedownEvent”方法内的this指向切换到Canvas)
      this.canvas.addEventListener('click', this.mouseClickEvent.bind(this))
    },
    mousehoverEvent(e) {
      let _self = this
      let fn = function () {
        _self.changeallArcs(e)
        _self.drawarc()
      }
      fn()
      // throttle(fn, 100)
    },
    changeallArcs(e) {
      const _self = this
      const x = e.layerX // 相对于画布的x偏移量
      const y = e.layerY // 相对于画布的y偏移量
      // 判断点的位置是否在饼图里面
      console.log(x, y)
      let t = (x - 300) * (x - 300) + (y - 300) * (y - 300)
      if (t < (_self.r * _self.r)) {
        _self.allArcs.forEach(p => {
          let degree = Math.atan2((x - 300), -(y - 300))
          console.log(degree)
          if (degree <= Math.PI / 2) {
            degree = (3 * Math.PI) / 2 + degree
          } else {
            degree = degree - Math.PI / 2
          }
          if (p.startdegree < degree && degree < p.enddegree) {
            p.hover = true
            _self.hoverItem = p
            _self.isShowHover = true
          } else {
            p.hover = false
          }
        })
        _self.hoverstyle = {
          left: x + 20,
          top: y + 10
        }
      } else {
        _self.allArcs.forEach(p => {
          p.hover = false
        })
        _self.hoverItem = {}
        _self.isShowHover = false
      }
    },
    mouseClickEvent(e) {
      const x = e.layerX // 相对于画布的x偏移量
      const y = e.layerY // 相对于画布的y偏移量
      // 判断点的位置是否在饼图里面
      this.changeallArcs(e)
      let object = this.allArcs.find(p => p.hover)
      console.log(object)
      this.$message.info(`当前点击点的坐标是x:${x},y:${y},当前点击的对象是名称:${object.item.name},战斗力:${object.item.num}`)
    }
  }
}
</script>

<style scoped lang="scss">
.main-c {
  padding: 15px;

  h1 {
    font-size: 18px;
    line-height: 36px;
  }

  h3 {
    padding-top: 10px;
  }

  .tutor {
    border: 0px solid #eee;
    position: relative;
    z-index: 1;
  }

  h4 {
    position: absolute;
    top: 23px;
    font-size: 28px;
    font-weight: bold;
  }

  #tutorial2 {
    border: 1px solid #999;
  }

  .mycanvas {
    position: relative;

    .canvashover {
      position: absolute;
      border: 1px solid #eee;
      background-color: #eee;
      opacity: 0.9;
      box-shadow: 1px 1px 1px 1px 1px;
      padding: 10px;
      border-radius: 5px;
      transition: 1s;

      span {
        padding: 5px 0px;
      }
    }
  }
}
</style>
