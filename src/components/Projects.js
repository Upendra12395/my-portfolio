// Projects.js
export function Projects() {
    return (
        <section id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-emerald-500 font-bold text-center">
                My Projects
            </h2>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
                            gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                            hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
                        className="w-full h-full">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230927120905/gfg.png"
                            alt="Project 1"
                            className="w-full h-full 
                                        bg-cover rounded"/>
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline"
                            href="https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/">
                            Let's Build
                        </a>
                    </h2>
                    <p>
                        This is a project built on react and node. The app allows users (project owners) to post building projects, detailing their requirements, budget, and location. Builders and contractors create profiles, browse projects, and place bids with cost estimates and timelines. Users can compare bids, select a contractor, and use built-in chat functionality for negotiations. A rating and review system enhances contractor credibility, while secure payment options ensure smooth transactions. Optional features like project tracking, contract generation, and document sharing add value, with admin controls to monitor the platform and resolve disputes.
                    </p>
                </div>
            </div>
            <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                            hover:scale-[102%] w-full">
                <div className="w-80 rounded">
                    <a href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/" className="w-full h-full">
                        <img src= "https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png" alt="Project 2" lassName="w-full h-full bg-cover rounded" />
                    </a>
                </div>
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center">
                        <a className="hover:underline" href="https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
                            Weeather Update
                        </a>
                    </h2>
                    <p>
                    The weather update app fetches real-time weather data from a third-party API based on city names. It provides current conditions such as temperature, humidity, wind speed, and weather icons, along with hourly and weekly forecasts. Users can search for cities or allow geolocation for automatic updates. Additional features include sunrise/sunset times, weather alerts, and notifications. It focuses on providing accurate, real-time information with fast performance and efficient data handling.
                    </p>
                </div>
            </div>
        </section>
    );
}
