export interface Folder {
  _id: string;
  title: string;
  class: string;
  files: { originalName: string; path: string; _id: string }[]  ;
  
}
