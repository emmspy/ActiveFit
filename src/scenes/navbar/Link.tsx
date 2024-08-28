import AnchorLink from "react-anchor-link-smooth-scroll"

//cada vez que paso props por ts debo identificar el tipo
//type e interface son muy similares
type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    // cada vez que le pase un id, va a quitar las mayusculas y los espacios
    const lowerCasePage = page.toLowerCase().replace(/ /g,  " ")

  return (
    <AnchorLink
        //cuando la pagina seleccionada sea la misma al id stylar
        className={`#${lowerCasePage === selectedPage ? "text-midnigh" : ""}
            transition duration-500 hover:text-storm-cloud
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {/*paginas a donde va a redirigir*/}
        {page}
    </AnchorLink>
  )
}

export default Link
