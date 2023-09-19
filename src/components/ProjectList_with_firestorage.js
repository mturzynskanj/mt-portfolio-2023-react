import React, { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import ProjectItem from "./ProjectItem.js";
import projects from "../data/portfolio.js";

import { db } from "../firebase.config.js";

import _ from "lodash";

const ProjectList = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${image.name}`;
        const storageRef = ref(storage, "images/" + fileName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );
      });
    };
    const fetchListings = async () => {
      try {
        const listingsCol = collection(db, "projects");
        // create query
        const querySnap = await getDocs(listingsCol);

        let test = [];
        querySnap.forEach((doc) => {
          test.push(doc.data());
        });

        console.log("test =====>", test);

        setProjects(test);
      } catch (e) {
        console.log("Error is ", e);
      }
    };

    fetchListings();
  }, [setActiveProject]);

  return (
    <div id="projects">
      <p>projects list</p>
      {projects ? (
        <ul id="project_list">
          {_.map(projects, (project, index) => {
            return (
              <ProjectItem
                key={project.name}
                {...project}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />
            );
          })}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default ProjectList;

/*!SECTION
 <ProjectItem
                key={project.name}
                {...project}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
              />



*/
