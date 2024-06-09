import { Key, Suspense } from "react";
import Bottone from "./Bottone";
import Immagine from "./Immagine";

export default async function page() {
  const data = await fetch('https://api.magicthegathering.io/v1/cards', {
    next: { tags: ['collection'] }
  });
  const dataJson = await data.json();

  return (
    <>
      <div className="grid grid-cols-4">
        {dataJson.cards.map((card: { id: Key | null | undefined; imageUrl: string | undefined; }) =>
          <>
              {card.imageUrl !== undefined &&
                <Immagine imageUrl={card.imageUrl} />
              }
          </>
        )}
        <Bottone />
      </div>
    </>
  );
}