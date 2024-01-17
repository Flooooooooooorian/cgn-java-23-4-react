
type HeaderProps = {
    title: string
}
export default function Header(props: HeaderProps) {

    return <h1>
        {props.title}
    </h1>
}
