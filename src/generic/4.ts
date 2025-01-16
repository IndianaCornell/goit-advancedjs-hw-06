/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageProps {
  title: string;
  content: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

const myPage = new Page({ title: "My Page", content: "This is some content" });
myPage.pageInfo(); // Виведе: 'My Page'

export {};
