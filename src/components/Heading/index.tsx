import { PropsWithChildren } from "react";

export default function Heading({ children }: PropsWithChildren) {
    return (
        <h1>{children}</h1>
    )
}