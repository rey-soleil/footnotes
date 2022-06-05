import { Controller, Get, Path, Route } from "tsoa";

type Note = {
    url: string,
    title: string,
    comment?: string,
}

type Footnote = {
    creator?: string,
    notes: Note[],
}

@Route('footnote')
export class FootnoteController extends Controller {
    @Get('{footnoteId}')
    public async getFootnote(
        @Path() footnoteId: number
    ): Promise<Footnote> {
        return;
    }
}