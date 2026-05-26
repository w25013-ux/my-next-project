import { getNewsList} from "@/app/_Libs/microcms";
import Newslist from "@/app/_components/NewsList";

export default async function Page() {
    const { contents: news } = await getNewsList();
    return (
        <div>
            <Newslist news={news} />
        </div>
    );
}
