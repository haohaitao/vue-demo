<template>
<article class="detail-article" ref="article">
    <div class="art-header">
      <h1>{{blog.title.rendered}}</h1>
      <div class="header-info">
        <i class="el-icon-table-lamp"/>
          <router-link :to="`/category/${blog.category_name}`">{{blog.category_name}}</router-link>
        <i class="el-icon-date" />
        {{blog.date.split('T')['0']}}
        <i class="el-icon-view" />
        {{blog.pageviews}}
        <i class="el-icon-s-comment" />
        <span>{{blog.total_comments}}</span>
      </div>
      <div class="header-tag">
        <el-tag>标签一</el-tag>
      </div>
      <div class="tag-time">
        <i class="el-icon-timer" />
        {{blog.date.split('T')['1']}}
      </div>
    </div>
    <div id="blog" class="content markdown-body" v-html="blog.content.rendered"></div>
    <div class="content-footer">
      <p>本文由 <router-link to="/">{{blog.author === 1 ? '一只' : '博主'}}</router-link> 创作，转载请注明</p>
      <p>最后编辑时间：{{blog.modified.split('T')['0'] + ' ' + blog.modified.split('T')['1']}}</p>
    </div>
  </article>
</template>

<script>
import * as http from '@/common/http'
import * as config from '@/common/config'
let rootUrl = config.default.apiUrl;
export default {
  data () {
    return {
      blog: [],
    };
  },
  computed: {
  },
  created () {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let id = this.$route.params['id'];
      console.log(id)
      http.get('/wp-json/wp/v2/posts/' + id,'',rootUrl).then( (res)=>{
        console.log(res)
        this.blog = res.data
        console.log(this.blog,typeof this.blog)
      })
    },
  },
  watch: {
  },
  components: {
  },
};
</script>

<style lang='scss' scoped>
article {
  animation: fadeIn .6s linear;
  max-width: 700px;
  padding: 0 25px 30px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  text-align: left;
  font-size: 15px;
  line-height: 32px;

  .art-header {
    padding-top: 100px;
    padding-bottom: 12px;
    border-bottom: 1px dashed #b7b7b7;
    position: relative;

    h1 {
      font-size: 22px;
      color: #222;
      font-weight: 400;
      line-height: 1.8;
    }

    .header-info {
      margin: 12px 0px 0;
      i {
        &:not(:first-child) {
          margin-left: 12px;
        }

        font-size: 14px;
        margin-top: -2px;
      }
    }
    .header-tag {
      width: 85%;
      margin-top: 14px;
      a {
        color: #fff;
        border: 1px solid #f16d71;
        border-radius: 15px;
        background: #f16d71;
        display: inline-block;
        margin-right: 10px;
        padding: 0 15px;
        height: 25px;
        line-height: 25px;
        transition: .4s;

        &:hover {
          color: #5f5f5f !important;
          border: 1px solid #f7f7f7;
          outline-style: none;
          background: #f7f7f7;
        }
      }
    }

    .tag-time {
      position: absolute;
      right: 0;
      bottom: 12px;
      line-height: 14px;

      i {
        font-size: 14px;
        margin-top: -2px;
      }
    }
  }
  .modifyBtn {
    position: absolute;
    right: 26px;
    margin-top: 4px;
  }
  .content {
    margin: 26px 0;
  }
  .content-footer {
    border-top: 1px solid #e0e0e0;
    padding-top: 26px;
    color: #24292e;
    font-size: 14px;
    text-align: center;

    a {
      border-bottom: 1px solid #ccc;

      &:hover {
        border-bottom: 1px solid #eb5055;
      }
    }
  }
}
.zoom-shadow {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 1500;
  transition: .3s;
  background: rgba(0, 0, 0 , .6);
  opacity: 0;
}
</style>
<style lang="scss">
#directory {
  position: fixed;
  top: 50%;
  margin-left: 686px;
  max-width: 400px;
  transform: translateY(-54%);
  .cl-wrapper {
    padding: 5px 0;
    border-left: 2px solid #ddd;
    ul li {
      position: relative;
      line-height: 29px;
      div:hover {
        color: #f44336 !important;
      }
      .cl-link-active {
        &::before {
          position: absolute;
          top: 10.3px;
          left: -5px;
          display: inline-block;
          width: 8px;
          height: 8px;
          content: '';
          border-radius: 50%;
          background-color: #f44336 !important;
        }
      }
      .cl-link {
        display: initial;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #272727;
      }
    }
    &>ul>li {
      position: relative;
      padding-left: 15px;
      &>ul>li {
        .cl-link-active {
          &::before {
            left: -20px;
          }
        }
        &>ul>li {
          div {
            margin-left: 20px;
            color: #8e8e8e !important;
          }
        }
        div {
          margin-left: 10px;
          color: #5f5f5f !important;
        }
      }

      .cl-link-active {
        color: #f44336 !important;
      }
    }
  }
}
/* 评论样式 */
.comments-desc {
  &::before {
    font-size: 30px;
    content: '|';
    color: #eb5055;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: -13px;
  }
  margin-top: 62px;
  color: #24292e;
  font-size: 1.4em;
  position: relative;
  margin-bottom: 16px;

  span {
    margin-left: 12px;
  }
}
#vcomments {
  .txt-right {
    display: none;
  }
  .veditor {
    min-height: 6rem;
    max-height: 12rem;
  }
  .vcontrol {
    padding-top: 10px;
    & > .col:first-child {
      visibility: hidden;
    }
    .text-right {
      .new-btn {
        border: none;
        border-radius: .3rem;
        padding: .5rem 1.25rem;
        font-size: .875rem;
        line-height: 1.42857143;
        outline: none;
        background: #ff9800;
        color: #fff;
        border: 1px solid #ff9800;
        &:hover {
          border: 1px solid #f60;
        }
      }
      .vsubmit {
        background: #ff9800;
        color: #fff;
        &:hover {
          border: 1px solid #f60;
        }
      }
    }
  }
  .vinfo {
    display: none !important;
  }
  .vlist {
    & > .vcard > .vh {
      border-bottom: 1px solid #e5e9ef !important;
    }
    .vcard {
      padding-top: 20px;
      .vimg {
        border: none;
        margin-top: 0.1rem;
        width: 3.25rem;
        height: 3.25rem;
      }
      .vh {
        border: none;
        &:hover {
          & > .vmeta .vat {
            display: block;
          }
        }
        .vhead {
          .vnick {
            color: #6d757a;
            font-weight: 700;
            &::before {
              background: #eb5055;
            }
            &:hover {
              color: #eb5055;
            }
            &[href="/"] {
              color: #eb5055;
            }
          }
          .vsys {
            display: none;
          }
        }
        .vmeta .vat {
          display: none;
          color: #b3b3b3;
        }
        .vcontent {
          padding-top: 2px;
          margin-bottom: 0;
          .at {
            color: #ff9800;
            &::before {
              background: #eb5055;
            }
          }
          p {
            display: inline;
            margin-left: 6px;
          }
          a {
            &::before {
              background: #eb5055;
            }
          }
        }
      }
      .vquote {
        border: none;
        margin-top: 0;
        padding-left: 0;

        .vimg {
          width: 2.80rem;
          height: 2.80rem;
        }
      }
    }
  }
  .vpage {
    .vmore {
      background: #ff9800;
      color: #fff;
      &:hover {
        border: 1px solid #f60;
      }
    }
  }
  .vcancel {
    background: #ff4d43;
    color: #fff;
    border: 1px solid #ff6969;
  }
  .vsure {
    background: #4373ff;
    color: #fff;
    border: 1px solid #4f87ff;
  }
}
</style>

