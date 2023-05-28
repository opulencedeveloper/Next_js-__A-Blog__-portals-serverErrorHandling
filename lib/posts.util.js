import fs from "fs";
import path from "path";

//package helps us to work with mark-down files
import matter from "gray-matter";

//join() is used to construct a path
//cwd means Current working directory, which is the root of your project,
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  //readdireSync pauses code execution untill it is done reading from the directory
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  //we want to use the filename(postIdentifier) as a slug, so we remove the extention of the file, if it has any, 
  //so make sure your file name has the slug format, which is seperating each word with dash
  const postSlug = postIdentifier.replace(/\.md$/, "");

  //join() is used to construct a path, and we addback the extension name '.md'
  const filePath = path.join(postsDirectory, `${postSlug}.md`);

  //readFileSync pauses code execution untill it is done reading from a file
  //'utf-8' is the file encoding, to support UNICODE characters
  const fileContent = fs.readFileSync(filePath, "utf-8");

  //this fn(matter) is from a 3rd party package to help us work with mark-down files.
  //data is the meta-data in the mark-down file which is retured as a JS Obj, content is the content returned as a String,
  //there names (data, content) are not up to you
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    //this contnent below is the whole content in the mark down file after the meta-data that 
    //was written inside these --> (---    ---)on top of the file,  check mark down file, so below it is the content,
    //you can then write it in mark-down format, eg #hello   this is a title in markdown
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  //reads all the post(markdown files) in the post folder
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //this makes sure that post with greater(recent) date comes first
  //sort receives two argument, which we use to compare based on what is in 'allPost'
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
