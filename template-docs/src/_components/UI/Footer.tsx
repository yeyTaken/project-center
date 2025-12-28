import { Footer as NextraFooter } from 'nextra-theme-docs';

export default function Footer() {
    return (
        <NextraFooter>
            Template Docs © {new Date().getFullYear()}. Todos os direitos reservados.
        </NextraFooter>
    )
}