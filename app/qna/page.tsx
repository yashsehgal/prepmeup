'use client';
import PageContent from '@/components/layouts/page-content';
import ViewContainer from '@/components/layouts/view-container';

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { fetchRecentQNASessions } from '@/middleware/qna/recent-sessions';
import { RecentSessionsEmptyStateView } from '@/components/ui/empty-states';
import { RecentQnASessionsList } from '@/components/sections/recent-qna-sessions-list';

const TopicBasedQNA: React.FunctionComponent = () => {
  const [recentQNASessions, setRecentQNASessions] = useState<
    Array<QNASessionCardInterface>
  >(fetchRecentQNASessions());

  return (
    <PageContent>
      <header className="topic-based-qna-header">
        <ViewContainer className="flex flex-row items-center justify-between">
          <h1 className="text-4xl font-semibold">{'Your Q/A Sessions'}</h1>
          <div className="my-6 flex flex-row items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Start new session</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Start a new Q/A Session</DialogTitle>
                  <DialogDescription>
                    Provide information related to new session. This helps us to
                    gather topics for you
                  </DialogDescription>
                </DialogHeader>
                <div className="new-session-form-container">
                  <div className="select-topic-wrapper form-input-wrapper">
                    <Label>Select topic</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose topic, domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* Render select items here */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="select-level-wrapper form-input-wrapper">
                    <Label>Diversity & Depth</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose level of diversity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {/* Render select items here */}
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
      {recentQNASessions.length ? (
        <RecentQnASessionsList data={recentQNASessions} />
      ) : (
        <RecentSessionsEmptyStateView />
      )}
    </PageContent>
  );
};

export default TopicBasedQNA;
