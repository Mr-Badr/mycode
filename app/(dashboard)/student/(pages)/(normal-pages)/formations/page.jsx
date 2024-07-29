"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TiPlus } from "react-icons/ti";
import Header from '../../../_components/Header';
import ComponentHeader from '../../../../../(dashboard)/student/_components/ComponentHeader';
import Navbar from '../../../../../../app/(dashboard)/student/_components/Navbar';
import FormationsTable from './_components/FormationTable';
import AddFormationPopup from './_components/AddFormationPopup';
import LiveBroadcastPopup from './_components/LiveBroadcastPopup';
import VideoLessonPopup from './_components/VideoLessonPopup';

const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

function Page() {
  const [showAddFormationPopup, setShowAddFormationPopup] = useState(false);
  const [showLivePopup, setShowLivePopup] = useState(false);
  const [showVideoLessonPopup, setShowVideoLessonPopup] = useState(false);
  const [formations, setFormations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editFormation, setEditFormation] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/formations`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setFormations(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowAddFormationPopup = () => setShowAddFormationPopup(true);
  const handleCloseAddFormationPopup = () => setShowAddFormationPopup(false);

  const handleShowLivePopup = () => setShowLivePopup(true);
  const handleCloseLivePopup = () => setShowLivePopup(false);

  const handleShowVideoLessonPopup = () => setShowVideoLessonPopup(true);
  const handleCloseVideoLessonPopup = () => setShowVideoLessonPopup(false);

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      formations.filter(formation =>
        formation.name.toLowerCase().includes(term)
      )
    );
  };

  const handleEdit = (id) => {
    const formationToEdit = formations.find(formation => formation.id === id);
    setEditFormation(formationToEdit);
    setShowAddFormationPopup(true); // Open the edit popup
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this formation?')) {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/formations/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setFormations(formations.filter(formation => formation.id !== id));
        setFiltered(filtered.filter(formation => formation.id !== id));
      } catch (error) {
        console.error('Error deleting formation:', error);
      }
    }
  };

  return (
    <div dir="rtl">
      <Header />

      <main>
        <section className="pt-5 pb-5">
          <div className="container-fluid p-4" style={{ maxWidth: "75%" }}>
            <ComponentHeader />

            <div className="row mt-0 mt-md-4">
              <div className="col-lg-3 col-md-4 col-12">
                <Navbar />
              </div>
              <div className="col-lg-9 col-md-8 col-12">
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={handleShowVideoLessonPopup}>
                    <div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
                      <div className="card-body d-flex flex-column justify-content-center text-center">
                        <h2>إنشاء دورة مسجلة</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={handleShowLivePopup}>
                    <div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
                      <div className="card-body d-flex flex-column justify-content-center text-center">
                        <h2>إنشاء بث مباشر</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <FormationsTable
                  filtered={filtered}
                  searchTerm={searchTerm}
                  handleSearchChange={handleSearchChange}
                  handleShowAddFormationPopup={handleShowAddFormationPopup}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LiveBroadcastPopup show={showLivePopup} handleClose={handleCloseLivePopup} />
      <VideoLessonPopup show={showVideoLessonPopup} handleClose={handleCloseVideoLessonPopup} />
      <AddFormationPopup
        show={showAddFormationPopup}
        handleClose={handleCloseAddFormationPopup}
        formation={editFormation}
      />
    </div>
  );
}

export default Page;
