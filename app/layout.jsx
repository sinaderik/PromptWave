import '@styles/globals.css'

const RootLayout = ({children}) => {
    const metaData = {
        title: 'PromptWave',
        description: "Discover and share AI prompts"
    }

    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout