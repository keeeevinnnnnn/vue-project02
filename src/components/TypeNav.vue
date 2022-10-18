<template>
  <div class="type-nav">
    <div class="container">
      <div>
        <h2 class="all">全部商品分類</h2>
        <!-- 三级联动结构||过渡动画效果-->
        <transition name="sort">
          <div class="sort">
            <div class="all-sort-list2">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex == index }"
              >
                <h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex()">
                  <a href="">{{ c1.categoryName }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <div class="fore">
                      <dt>
                        <a href="">{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em
                          v-for="(c3, index) in c2.categoryChild"
                          :key="c3.categoryId"
                        >
                          <a href="#">{{ c3.categoryName }}</a>
                        </em>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a>服装城</a>
        <a href="###">美妝館</a>
        <a href="###">尚品匯超市</a>
        <a href="###">全球購</a>
        <a href="###">閃購</a>
        <a href="###">團購</a>
        <a href="###">有趣</a>
        <a href="###">秒殺</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存儲用戶鼠標位置
      currentIndex: -1,
    };
  },
  mounted() {
    // 通知vuex發請求，獲取數據，存儲在倉庫當中
    this.$store.dispatch("categoryList");
  },
  computed: {
    ...mapState({
      // 右側需要的是一個函數，當使用這個計算屬性的時候，右側函數會立即執行一次
      // 注入一個參數state，就是大倉庫的數據
      categoryList: (state) => {
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    // 鼠標進入修改響應式數據currentIndex數據
    changeIndex(index) {
      // index: 鼠標移上某一個元素分類的索引值
      this.currentIndex = index;
    },
    leaveIndex() {
      this.currentIndex = -1;
    },
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            &.show {
              background: linear-gradient(
                to right,
                pink,
                yellow,
                cyan,
                blue,
                red
              );
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur {
          background-color: lightblue;
        }
      }
    }
    //过渡动画的样式
    //如果transiton没有name属性 ： v-enter   v-enter-to v-enter-active
    //如果transition有name属性  ： name的属性值-enter  name的属性值-enter-to
    //进入状态：开始阶段
    .sort-enter {
      height: 0px;
      transform: rotate(0deg);
    }
    //进入状态：结束阶段
    .sort-enter-to {
      height: 461px;
      transform: rotate(360deg);
    }
    //定义过渡动画的时间等等
    .sort-enter-active {
      transition: all 0.2s;
    }
  }
}
</style>
