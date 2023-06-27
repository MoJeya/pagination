import styled from "styled-components";
import Header from "./Header";
import Footer from "./base-components/Footer";
import NumberedNavigation from "./base-components/NumberdNavigation";
import JobCard from "./base-components/JobCard";
import JobDTO from "./assets/JobDTO";
import React, { useState } from "react";
import { fetchEntries } from "@/contentful";
import LocationDTO from "./assets/LocationDTO";


const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  
`

const Content = styled.div`
  justify-content: center;
  display: grid;
  grid-column-start: 6;
`;

const Layout: React.FC = () => {
  const [jobs, setJobs] = React.useState<JobDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToShow = jobs.slice(startIndex, endIndex);

  React.useEffect(() => {
    const fetchData = async () => {
      const entries = await fetchEntries("job");
      console.log(entries);
      if (entries && entries.items) {
        const jobEntries: JobDTO[] = entries.items.map((entry: any) => ({
          id: entry.sys.id,
          category: entry.fields.department.fields.title,
          title: entry.fields.title,
          location: entry.fields.locations[0].fields.city ?? "",
          employmentStatus: entry.fields.type.fields.title,
        }));
        setJobs(jobEntries);
      }
    };
    fetchData();
  }, []);


const handlePageClick = (pageNumber: number) => {
  if(pageNumber !== currentPage) {
    setCurrentPage(pageNumber);
  }
}
  return (
    <LayoutStyle>
      <Header amountOfJobs={jobs.length} />
        <ContentWrapper>
          <Content>
            {cardsToShow.map((job, index) => (
              <JobCard
                location={job.location}
                employmentStatus={job.employmentStatus}
                key={job.id}
                category={job.category}
                title={job.title}
              />
            ))}
            <NumberedNavigation
              currentPage={currentPage}
              totalPages={Math.ceil(jobs.length / cardsPerPage)}
              onBack={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              } }
              onNext={() => {
                if (currentPage < Math.ceil(jobs.length / cardsPerPage)) {
                  setCurrentPage(currentPage + 1);
                }
              } } onPageClick={handlePageClick}/>
          </Content>
        </ContentWrapper>
      <Footer />
    </LayoutStyle>
  );
};

export default Layout;