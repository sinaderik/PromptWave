import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

const RootLayout = ({ children }) => {
    const metaData = {
        title: 'PromptWave',
        description: "Discover and share AI prompts"
    }

    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout