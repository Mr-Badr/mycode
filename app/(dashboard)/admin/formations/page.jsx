"use client";
import { useState, useEffect } from 'react';
import PageHeader from './_components/PageHeader';
import SearchForm from './_components/SearchForm';
import FormationsTable from './_components/FormationsTable';
import EditModal from './_components/EditModal';
import DeleteModal from './_components/DeleteModal';
import axiosInstance from '../../../../services/axiosInstance'; // Adjust the path as necessary

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

  // Fetch formations data from the API
  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axiosInstance.get('/formations');
        setFormations(response.data.data);
        setFiltered(response.data.data); // Initialize filtered data
      } catch (error) {
        console.error('Error fetching formations data:', error);
      }
    };

    fetchFormations();
  }, []);

  // Fetch formation types from the API
  useEffect(() => {
    const fetchFormationTypes = async () => {
      try {
        const response = await axiosInstance.get('/formation-types'); // Adjust the path as necessary
        setFormationTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching formation types:', error);
      }
    };

    fetchFormationTypes();
  }, []);

  // Filter formations based on search term
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
    setImage(null); // Reset image for editing
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
      
      // Add required fields to the FormData object
      formData.append('name', selected.name || '');
      formData.append('formation_type_id', selectedFormationType);
      formData.append('description', selected.description || '');
      formData.append('status', selected.status || '');
      formData.append('date_form', selected.date_form || '');
      
      // Check if an image file is selected and append it to formData
      if (image) {
        formData.append('image', image);
      }
  
      // Use PUT if updating an existing formation
      if (selected.id) {
        await axiosInstance.put(`/formations/${selected.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axiosInstance.post('/formations', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
  
      // Refresh data after save
      const response = await axiosInstance.get('/formations');
      setFormations(response.data.data);
      setFiltered(response.data.data);
      setShowEditModal(false);
    } catch (error) {
      console.error('Error saving formation:', error);
  
      // Log the response data for debugging
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
    }
  };

  const confirmDelete = async () => {
    try {
      await axiosInstance.delete(`/formations/${selected.id}`);
      // Refresh data after delete
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
    setSelected(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setSelected(prev => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleDateChange = (e) => {
    setSelected(prev => ({
      ...prev,
      date_form: e.target.value,
    }));
  };

  return (
    <div className='container-fluid p-6'>
      <PageHeader />
      <div className="card">
        <SearchForm searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="card-body p-0">
          <FormationsTable
            formations={filtered}
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
