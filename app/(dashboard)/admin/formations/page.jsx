"use client";
import { useState, useEffect } from 'react';
import PageHeader from './_components/PageHeader';
import SearchForm from './_components/SearchForm';
import FormationsTable from './_components/FormationsTable';
import EditModal from './_components/EditModal';
import DeleteModal from './_components/DeleteModal';
import axiosInstance from '../../../../services/axiosInstance'; // Adjust the path as necessary
import { getStorageUrl } from '../../../../utils/getStorageUrl'; // Adjust the path as necessary

const FormationsPage = () => {
  const [formations, setFormations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [image, setImage] = useState(null);
  const [formationTypes, setFormationTypes] = useState([]);
  const [selectedFormationType, setSelectedFormationType] = useState('');

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axiosInstance.get('/formations');
        setFormations(response.data.data);
        setFiltered(response.data.data);
      } catch (error) {
        console.error('Error fetching formations data:', error);
      }
    };

    fetchFormations();
  }, []);

  useEffect(() => {
    const fetchFormationTypes = async () => {
      try {
        const response = await axiosInstance.get('/formation-types');
        setFormationTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching formation types:', error);
      }
    };

    fetchFormationTypes();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFiltered(formations);
    } else {
      setFiltered(
        formations.filter(formation =>
          formation.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, formations]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (formation) => {
    setSelected(formation);
    setSelectedFormationType(formation.formation_type_id || '');
    setImage(null);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setSelected({ id });
    setShowDeleteModal(true);
  };

  const handleSaveClick = async () => {
    try {
      if (!selectedFormationType) {
        alert('يرجى اختيار نوع الدورة');
        return;
      }

      const formData = new FormData();
      formData.append('name', selected.name || '');
      formData.append('formation_type_id', selectedFormationType);
      formData.append('description', selected.description || '');
      formData.append('status', selected.status || '');
      formData.append('date_form', selected.date_form || '');
      if (image) {
        formData.append('image', image);
      }

      if (selected.id) {
        await axiosInstance.put(`/formations/${selected.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axiosInstance.post('/formations', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      const response = await axiosInstance.get('/formations');
      setFormations(response.data.data);
      setFiltered(response.data.data);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error saving formation:', error);
    }
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete(`/formations/${selected.id}`);
      const response = await axiosInstance.get('/formations');
      setFormations(response.data.data);
      setFiltered(response.data.data);
      setShowDeleteModal(false);
    } catch (error) {
      console.error('Error deleting formation:', error);
    }
  };

  const handleCloseEditModal = () => setShowEditModal(false);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setSelected(prev => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleDateChange = (e) => {
    setSelected(prev => ({ ...prev, date_form: e.target.value }));
  };

  return (
    <div className='container-fluid p-6'>
      <PageHeader />
      <div className="card">
        <SearchForm searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="card-body p-0">
          <FormationsTable
            formations={filtered}
            formationTypes={formationTypes}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
          />
        </div>
      </div>
      <EditModal
        showEditModal={showEditModal}
        handleCloseEditModal={handleCloseEditModal}
        handleSaveClick={handleSaveClick}
        selected={selected}
        selectedFormationType={selectedFormationType}
        handleFormationTypeChange={(e) => setSelectedFormationType(e.target.value)}
        formationTypes={formationTypes}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleDateChange={handleDateChange}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleCloseDeleteModal={handleCloseDeleteModal}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default FormationsPage;
