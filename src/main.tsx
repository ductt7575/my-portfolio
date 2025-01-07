import "@/i18n";
import Layout from "@/layout";
import { AppContextProvider } from "components/context/app.context";
import AboutPage from "pages/about";
import HomePage from "pages/home";
import ProjectPage from "pages/project";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "styles/global.scss";
import { WorkPage } from "./pages/work";
import { Thought } from "./pages/thought";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/work-experience",
                element: <WorkPage />,
            },
            {
                path: "/project",
                element: <ProjectPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/thoughts",
                element: <Thought />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppContextProvider>
            <RouterProvider router={router} />
        </AppContextProvider>
    </StrictMode>
);
