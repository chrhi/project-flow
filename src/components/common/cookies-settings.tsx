import toast from "react-hot-toast";
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Label } from "~/components/ui/label"
import { Switch } from "~/components/ui/switch"
import { deteProjectMetaData, getProjectMetaData } from "~/lib/MetaData";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import { AbdullahButton , buttonVariants } from "../used/AbdullahButton";

export function CookieSettings() {

  const router = useRouter()

  const mutation = api.projectRouter.delete_project.useMutation({
    onSuccess : async () =>  {
      deteProjectMetaData();
      toast.success("Your project has been deleted successfully");
      await router.push("/app")
   
    },
    onError() {
      toast.error("Something went wrong");
    },
  });

  const deleteMyProject = () => {
    mutation.mutate({
      project_id: getProjectMetaData(),
    });
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>End the project</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Delele the project </span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch id="necessary" defaultChecked />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Delte my team member</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch id="functional" />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Delele my documents</span>
            <span className="font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch id="performance" />
        </div>
      </CardContent>
      <CardFooter>
        <AbdullahButton 
         className={`${buttonVariants({ variant:"secondary"})}  w-full `}
        onClick={deleteMyProject}
        isLoading={mutation.isLoading}
        variant="outline" >
          End my project
        </AbdullahButton>
      </CardFooter>
    </Card>
  )
}