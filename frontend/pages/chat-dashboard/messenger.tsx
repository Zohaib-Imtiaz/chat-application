import Head from "next/head";
import { ConversationList } from "../../components/conversation-list";
import { ConversationListHeader } from "../../components/conversation-list-header";
import ConversationSection from "../../components/conversation-section";

export default function Messenger() {
  return (
    <div className="flex flex-row ">
      <Head>
        <title>Messenger</title>
        <meta name="messenger" content="your chat messenger" />
      </Head>

      <div className="my-2 flex w-1/2 flex-col border-r-2 px-2">
        <ConversationListHeader />
        <ConversationList />
      </div>

      <ConversationSection />
    </div>
  );
}
