import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Heading from '.'

it('should render Heading with text Hello World', () => {
    render(<Heading>Hello World</Heading>);
    const heading = screen.getByRole('heading', {
        name: /Hello World/
    });

    expect(heading).toBeInTheDocument();
});