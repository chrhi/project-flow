import type { Project } from "@prisma/client";
import type { NextPage } from "next";
import { useState } from "react";
import Board from "~/components/board/flow-board/board";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import LaodingLayout from "~/components/layout/LaodingLayout"

 


// Page component
const Page: NextPage = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  const { isLoading } = api.newProjectRouter.getProjectOfOrg.useQuery(
    {
      org_id: getOrganizationId(),
    },
    {
      onSuccess: (data) => {
        setProjects(data);
      },
      onError: () => setIsError(true),
    }
  );

  return (
    <>
      <Header />
      <main className="w-full h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        
        isError ? (
          <h1>Sorry, there is an  error </h1>
        )
        :
         (
          <>
            <Boardhead setData={setProjects} data={projects} />
              <Board projects={projects} />
          </>
        )
      </main>
    </>
  );
};

export default Page;
