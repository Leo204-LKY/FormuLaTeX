<template>
  <div v-html="renderedMarkdown"></div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import markdownItKatex from 'markdown-it-katex';
  import katex from 'katex';
  import DOMPurify from 'dompurify';

  export default {
    props: {
      content: {
        type: String,
        required: true,
      },
    },
    computed: {
      renderedMarkdown() {
        let processedContent = this.content
          .replace(/\\\((.+?)\\\)/gs, (_, expr) => `$${expr}$`)
          .replace(/\\\[(.+?)\\\]/gs, (_, expr) => `$$${expr}$$`);

        // 初始化 Markdown-it 并配置 KaTeX
        const md = MarkdownIt({
          html: true,
          breaks: true,
        }).use(markdownItKatex, {
          katex,
          throwOnError: false,
          errorColor: '#ff0000',
        });

        // 渲染 Markdown 内容并过滤 XSS
        return DOMPurify.sanitize(md.render(this.content), {
          ADD_TAGS: ['script'], // 允许 KaTeX 生成的 <script> 标签
          ADD_ATTR: ['class', 'style', 'href', 'src'], // 允许必要属性
        });
      },
    },
  };
</script>
