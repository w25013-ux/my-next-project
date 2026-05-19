import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList} from "@/app/_Libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
// import { News } from "@/app/_Libs/microcms";

// type News ={
//   id: string;
//   title: string;
//   category: {
//     name: string;
//   };
//   publishedAt: string;
//   createdAt: string;
// };
// const data:{
//   contents:News[]} = {
//     contents: [
//       {id:"1",
//         title:
//         "渋谷にオフィスを移転しました",
//         category: {
//           name:"更新情報",
//         },
//         publishedAt:"2023/05/19",
//         createdAt:"2023/05/19",
//       },
//       {id:"2",
//         title:
//         "当社CEOが業界リーダーTOP30に選出されました",
//         category: {
//           name:"更新情報",
//         },
//         publishedAt:"2023/05/19",
//         createdAt:"2023/05/19",
//       },
//       {
//         id:"3",
//         title:"テストの記事です",
//         category:{
//           name:"更新情報",
//         },
//         publishedAt:"2023/05/19",
//         createdAt:"2023/05/19",
//       },
    

//     ],
//   };
  // type Event ={
  //   month:string;
  //   day:string;
  //   name:string;
  // }
  
  //   const eventData : {
  //     contents:Event[]}={
    
  //     contents:[
  //     {
  //       month:"4月",
  //       day:"15日",
  //       name:"花見"
  //     },
  //     {
  //       month:"5月",
  //       day:"5日",
  //       name:"ゴールデンウイーク"
  //     },
  //     {
  //       month:"8月",
  //       day:"20日",
  //       name:"バーベキュー"
  //     },
  //     {
  //       month:"10月",
  //       day:"31日",
  //       name:"ハロウィン"
  //     },
  //     ],
  //   };

export default async function Home(){
  //  
  const data = await getNewsList({
    limit : TOP_NEWS_LIMIT,
  });
  // const sliceData :News[] =[];
  const name ="世界";
  return (
    <>
    <section className={styles.top}>
  <div>
    <h1 className={styles.title}>テクノロジーの世界を変える</h1>
  <p className={styles.description}>
    私たちは市場をリード しているグローバルテックカンパニーです。
  </p>
  </div>
  <Image className={styles.bgimg} 
  src="/img-mv.jpg"
   alt="" 
   width={4000}
   height={1200} />
  </section>
  <section className={styles.news}>
    <h2 className={styles.newsTitle}>News</h2>
    <NewsList news={data.contents}/>
    {/* <ul>
      {sliceData.map((article)=>(
        <li key={article.id} className={styles.list}>
          <div className={styles.link}>
            <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={12000}
            height={630}
            />
            <dl className={styles.content}>
              <dt className={styles.newsItemTitle}>
                {article.title}
              </dt>
              <dd className={styles.meta}>
                <span className={styles.tag}>
                  {article.category.name}
                </span>
                <span className={styles.date}>
                  <Image
                  src="/clock.svg"
                  alt=""
                  width={16}
                  height={16}
                  priority
                  />
                  {article.publishedAt}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </ul> */}
    {/* <div>
        <h1>イベントスケジュール</h1>
        <ul>
          {eventData.contents.map((event,index)=>(
            <li key={index}>
              {event.month} {event.day} {event.name}
            </li>
          ))}
        </ul>
    </div> */}
    <div className={styles.newsLink}>
      <ButtonLink href ="/news">もっと見る</ButtonLink>
    </div>
  </section>
  </>
  );
}