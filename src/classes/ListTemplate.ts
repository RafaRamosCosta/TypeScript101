import { HasFormatter } from "../interfaces/HasFormatter";

/**
 * 1. register a list container (ul) in the constructor
 * 2. create a render method to render a new li to the container
 *    -- accepts arguments: invoice or payment, a heading and a position
 *    -- create the html template (li, h4, p)
 *    -- add the li template to the start/end of the list
 */

export class ListTemplate{
    constructor(private container: HTMLUListElement) {}

    render(item: HasFormatter, heading: string, position: "start" | "end"): void {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);

        if (position === "start") this.container.prepend(li);
        
        this.container.append(li);
    }
}

