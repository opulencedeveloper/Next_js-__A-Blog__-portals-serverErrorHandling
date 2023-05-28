import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

//This package helps us display code in a code format in the browser
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

//'js' should as be the identifier you used in  your mark-down file 
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderes = {
    //here we are replacing the default image tag rendered by mark-down
    //with <Image/>
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
    //we take the default code tag and display it with this packages, to be shown as code-format
    code: ({ node, ...props }) => {
      return (
        //look into the package docs to see how to style this more
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
