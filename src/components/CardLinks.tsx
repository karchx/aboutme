import { FC } from "react";

export interface LinkCard {
  url: string;
  description: string;
}

export type CardLinksProps = {
  links: LinkCard[],
}

const CardLinks: FC<CardLinksProps> = ({ links }) => {
  return (
    <>
      <div className="links">
        {
          links.map((link) => (
            <>
              <div className="animate__animated animate__fadeInDown">
                <a href={link.url}>{link.description}</a> <br/>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default CardLinks;
