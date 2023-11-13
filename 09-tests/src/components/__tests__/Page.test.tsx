import {Page} from "../Page";
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

const pageTitleTestText = "Stub title text"
const pageChildren = 'children text'
const loadingText = 'Loading...'

function renderPage({ error, loading }: { error?: string , loading?: boolean}) {
    render(
      <Page title={pageTitleTestText} error={error} loading={loading}>
        {pageChildren}
      </Page>
    );
}

describe("<Page>", () => {

    it('should render title', () => {
        // act + arrange
        renderPage({ error: 'stub error' })

        // assert
        const title = screen.getByText(pageTitleTestText)
        expect(title).toBeInTheDocument()
    })

    describe("test page children", () => {

        it('should render children when no error', () => {
            // act + arrange
            renderPage({});

            // assert
            const children = screen.getByText(pageChildren)
            expect(children).toBeInTheDocument()
        })

        it('should not render children when an error', () => {
            // act + arrange
            renderPage({ error: 'stub error' });

            // assert
            const children = screen.queryByText(pageChildren)
            expect(children).toBeNull()
        })

        it('should not render children when loading', () => {
            // act + arrange
            renderPage({ loading: true });

            // assert
            const children = screen.queryByText(pageChildren)
            expect(children).toBeNull()
        })
    })

    describe('test page error', () => {

        it('should render error', () => {
            // act
            const errorStr = 'stub error'

            // arrange
            renderPage({ error: errorStr });

            // assert
            const error = screen.getByText(errorStr)
            expect(error).toBeInTheDocument()
        })
    })


    describe('test page loading', () => {

        it('should render loading', () => {
            // act + arrange
            renderPage({ loading: true });

            // assert
            const loading = screen.getByText(loadingText);
            const children = screen.queryByText(pageChildren);

            expect(loading).toBeInTheDocument();
            expect(children).not.toBeInTheDocument();
          });

          it('should not render loading', () => {
            // act + arrange
            renderPage({});

            // assert
            const loading = screen.queryByText(loadingText);
            expect(loading).not.toBeInTheDocument();
          });
    })

})