import PageContent from "@/components/layouts/page-content";
import ViewContainer from "@/components/layouts/view-container";

import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label";

const TopicBasedQNA: React.FunctionComponent = () => {
  return (
    <PageContent>
      <header className="topic-based-qna-header">
        <ViewContainer className="flex flex-row items-center justify-between">
          <h1 className="text-4xl font-semibold">
            {"Your Q/A Sessions"}
          </h1>
          <div className="my-6 flex flex-row items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Start new session</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Start a new Q/A Session
                  </DialogTitle>
                  <DialogDescription>
                    Provide information related to new session. This helps us to gather topics for you
                  </DialogDescription>
                </DialogHeader>
                <div className="new-session-form-container">
                  <div className="select-topic-wrapper form-input-wrapper">
                    <Label>Select topic</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Choose topic, domain"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectItem value="working">working</SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="select-level-wrapper form-input-wrapper">
                    <Label>Diversity & Depth</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Choose level of diversity"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectItem value="working">working</SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <DialogTrigger>
                    <Button>Save</Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ViewContainer>
      </header>
      <section className="recent-qna-sessions-container mt-12">
        <ViewContainer>
          <h3 className="leading-snug text-base font-normal text-neutral-400">
            {"Recent sessions"}
          </h3>
        </ViewContainer>
      </section>
    </PageContent>
  )
};

export default TopicBasedQNA;