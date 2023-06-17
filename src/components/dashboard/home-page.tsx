import BedgetStatus from "./BedgetStatus";
import { getProjectCurrentPhaseAbdullah, getProjectMetaData } from "~/lib/MetaData";
import { RecentStakeholdersNew } from "./recent-stakeholders";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { api } from "~/utils/api";  
import { useState } from "react";
import type { StakeHolder } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";


  export default function HomePage() {

    const [stakeHolders , setStakeHolders] = useState<StakeHolder[]>([] as StakeHolder[])
  
    const {isLoading} = api.StakeHolderRouter.get_stakeholders.useQuery({projectId : getProjectMetaData()}, {
      onSuccess(data){
        setStakeHolders(data)
      }
    })

   
  
    return (
  
      <div className="w-full max-w-7xl min-h-[600px] mt-[50px] h-fit lg:px-8 my-8 gap-y-4  flex flex-col  items-center">
       
       <div className="w-full h-[50px] flex items-center justify-start ">
          <p className=" text-xl md:text-2xl font-semibold ">Bonjour 👋 voici le tableau de bord et votre espace personnel </p>
       </div>

       <div className="w-full hidden lg:flex  gap-x-6  mb-4 items-center  justify-start">
        
            <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Budget total
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    {
                      isLoading ? <Skeleton  /> : <div className="text-2xl font-bold">$
                      {
                       stakeHolders.reduce((total , item ) => {
                        if(item.type === "PROJECT_SPONSER") {
                         return total + Number(item.InvestmentAmount)
                        }
                        return 500
                       } , 0)
                      }
                        <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                      </div>
                    }
                    
                  </CardContent>
            </Card>
            <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
            </Card>
            <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
           
    </div>

    <div className="w-full h-[50px] flex items-center justify-start ">
          <p className=" text-xl md:text-2xl font-semibold ">statistiques 📈 de base de la situation actuelle du projet</p>
       </div>

       <div className="w-full h-[600px]  gap-x-4 justify-start mb-10  flex flex-col lg:flex-row">
                <div className="w-full lg:w-[65%] h-[80%] ">
                        <BedgetStatus />
                </div>
               <RecentStakeholdersNew />
       </div>
     
     
      </div>
    )
  }
  