# 图片上传

## Demo

使用`FileReader`方法，选择图片后读取到`base64`格式的图片信息，通过赋值给`img`的`src`实现图片预览

<ClientOnly>
  <uploadImg v-model="imgurl"></uploadImg>
</ClientOnly>

<script>
  export default {
    data () {
      return {
        imgurl: 'https://v2.vuepress.vuejs.org/images/hero.png'
      }
    }
  }
</script>

@[code vue](@src/components/uploadImg/demo.vue)

## Props

|参数|类型|说明|
|---|---|---|
|v-model|图片路径或对象|-|
|max|图片大小限制，默认500k|500|
|accept|可选文件类型|image/jpg,image/jpeg,image/png,image/gif|
|tip|提示语|仅支持jpg,png,gif文件|