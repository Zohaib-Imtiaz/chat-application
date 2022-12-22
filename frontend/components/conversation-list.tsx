import ConversationTile from "./conversation-tile";

export function ConversationList() {
  return (
    <div className="scrollbar flex h-[calc(100vh-120px)] flex-col overflow-y-auto">
      <ol>
        {(function () {
          const tiles = [];
          for (let i = 0; i < 10; i++) {
            tiles.push(
              <li>
                <ConversationTile />
                <hr className="my-1 h-[2px] border-0 bg-slate-300" />
              </li>
            );
          }
          return tiles;
        })()}
      </ol>
    </div>
  );
}
