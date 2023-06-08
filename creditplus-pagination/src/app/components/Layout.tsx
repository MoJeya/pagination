import styled from "styled-components";
import Header from "./Header";
import Footer from "./base-components/Footer";
import NumberedNavigation from "./base-components/NumberdNavigation";
import JobCard from "./base-components/JobCard";
import JobDTO from "./assets/JobDTO";
import React from "react";
import { fetchEntries } from "@/contentful";


const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 1440px;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  background-color:white;
  justify-content: center;
  align-items: center;
`;

const Layout: React.FC = () => {
  const [jobs, setJobs] = React.useState<JobDTO[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const entries = await fetchEntries();
      if (entries && entries.items) {
        const jobEntries: JobDTO[] = entries.items.map((entry: any) => ({
          id: entry.sys.id,
          category: entry.fields.category,
          title: entry.fields.title,
          location: entry.fields.location,
          employmentStatus: entry.fields.employmentStatus,
        }));
        setJobs(jobEntries);
      }
    };
    fetchData();
  }, []);

  return (
    <LayoutStyle>
      <Header />
        <Content>
        {jobs.map((job) => (
        <JobCard location={job.location} employmentStatus={job.employmentStatus} key={job.id} category={job.category} title={job.title}/>
        ))}
        <JobCard category={"IT & Projektmanagement"} title={"(Junior) Full Stack Developer (m/w/d)"} location={"Stuttgart"} employmentStatus={"Vollzeit"}/>
        <NumberedNavigation currentPage={0} totalPages={5} onBack={function (): void {
            throw new Error("Function not implemented.");
          } } onNext={function (): void {
            throw new Error("Function not implemented.");
          } }/>
        </Content>
        <Footer />
    </LayoutStyle>
  );
};

export default Layout;