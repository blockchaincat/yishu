<template>
  <ul class="note-list">
    <li v-for="(article,index) in articleList" class="note-item">
      <div class="content">
        <div class="author">
          <a href="" class="avatar" target="_blank">
            <img :src="/avatar/+authorList[index].avatar" alt="">
          </a>
          <div class="info">
            <router-link :to="{name:'ArticleList',params:{userId:authorList[index]._id}}" target="_blank" class="nickname">{{authorList[index].username}}</router-link>
            <time>{{article.create_time|timeFormat}}</time>
          </div>
        </div>
        <router-link :to="{name:'Article',params:{'articleId':article._id}}" target="_blank" class="title">{{article.title}}</router-link>
        <p class="abstract">{{article.content.replace(/<\/?[^>]*>/g,'')}}</p>
        <div class="meta">
          <router-link :to="{name:'Article',params:{articleId:article._id}}" target="_blank"><i class="fa fa-eye"></i>{{article.viewNums}}</router-link>
          <a href="" target="_blank">
            <i class="fa fa-comment"></i>{{article.comments.length}}
          </a>
          <span>
            <i class="fa fa-heart"></i>{{article.collected.length}}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
    export default {
      props:['articleList','authorList']
    }
</script>
<style lang="stylus" type="text/stylus">
  .note-list
    li
      position relative
      width 100%
      margin 0 0 17px
      padding 0 2px 17px 0
      border-bottom 1px solid #f0f0f0
      word-wrap break-word
      .author
        margin-bottom 14px
        font-size 13px
        a
          vertical-align middle
        .avatar
          width 32px
          height 32px
          cursor pointer
          display inline-block
          vertical-align middle
          margin 0 5px 0 0
        .info
          display: inline-block
          vertical-align: middle
          .nickname
            vertical-align middle
          time
            display inline-block
            padding-left 3px
            color #969696
            vertical-align middle

      .title
        margin -7px 0 4px
        display inherit
        font-size 18px
        font-weight 700
        line-height 1.5
        &:visited
          color #969696
      .abstract
        margin 0 0 8px
        font-size 13px
        line-height 24px
        display -webkit-box
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      .meta
        padding-left 0!important
        font-size 12px
        font-weight 400
        line-height 20px
        i
          margin-right 5px
        a
          margin-right 10px
          transition 0.1s ease-in
          color #b4b4b4
          &:hover
            color #333
        span
          margin-right 10px
          color #b4b4b4
          transition 0.1s ease-in
          &:hover
            color #333
</style>
