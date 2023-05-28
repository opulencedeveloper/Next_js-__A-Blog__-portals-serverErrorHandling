import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderes = {
    img: ({ node, ...props }) => {
      return (
        <Image
          src={`/images/posts/${post.slug}/${props.src}`}
          alt={props.alt}
          width={600}
          height={300}
        />
      );
    },
    code: ({ node, ...props }) => {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={props.language}
          children={props.children}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* components is used to over-write(replace) a certain element are rendered in Mark-down */}
      <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
