import { getNewsList } from "@/app/_Libs/microcms";
import { NEWS_LIST_LIMIT} from "@/app/_constants";
import Newslist from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: news} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });
    return (
        <>
            <SearchField />
            <Newslist news={news} />
        </>
    );
}