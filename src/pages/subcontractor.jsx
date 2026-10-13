import { useEffect, useState } from "react";

import AOS from "aos";

import {
  FiSearch,
  FiPlus,
  FiFilter,
  FiChevronDown,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import "./subcontractor.css";

function Subcontractor() {

  const initialSubcontractors = [
    {
      id: "SUB-001",
      name: "Raj Engineering",
      contact: "Rahul Kumar",
      email: "rahul@rajengineering.com",
      phone: "+91 98765 43210",
      location: "Ahmedabad",
      orders: 28,
      status: "Active",
      rating: "4.8",
      notes: "Specialized in precision CNC milling and heavy steel fabrication.",
    },
    {
      id: "SUB-002",
      name: "Mehta Industries",
      contact: "Amit Mehta",
      email: "amit@mehtaindustries.com",
      phone: "+91 98250 12345",
      location: "Vadodara",
      orders: 21,
      status: "Active",
      rating: "4.6",
      notes: "Expert in sheet metal stamping, brackets, and laser cutting.",
    },
    {
      id: "SUB-003",
      name: "Shree Fabrication",
      contact: "Kiran Shah",
      email: "kiran@shreefab.com",
      phone: "+91 99123 45678",
      location: "Rajkot",
      orders: 18,
      status: "Pending",
      rating: "4.4",
      notes: "ISO-certified machine housing and structural welding.",
    },
    {
      id: "SUB-004",
      name: "Patel Works",
      contact: "Harsh Patel",
      email: "harsh@patelworks.com",
      phone: "+91 98989 76543",
      location: "Ahmedabad",
      orders: 34,
      status: "Active",
      rating: "4.9",
      notes: "High reliability vendor for structural frameworks and powder coating.",
    },
    {
      id: "SUB-005",
      name: "Apex Engineering",
      contact: "Dhruv Shah",
      email: "dhruv@apexeng.com",
      phone: "+91 99090 12345",
      location: "Surat",
      orders: 15,
      status: "Inactive",
      rating: "4.2",
      notes: "Precision shaft manufacturing and lathe operations.",
    },
    {
      id: "SUB-006",
      name: "Krishna Works",
      contact: "Jay Krishna",
      email: "jay@krishnaworks.com",
      phone: "+91 98700 11223",
      location: "Gandhinagar",
      orders: 12,
      status: "Active",
      rating: "4.5",
      notes: "Heavy plate cutting and surface finishing services.",
    },
  ];

  const [subcontractors, setSubcontractors] = useState(initialSubcontractors);
  const [showModal, setShowModal] = useState(false);
  const [editingSubcontractor, setEditingSubcontractor] = useState(null);
  const [viewSubcontractor, setViewSubcontractor] = useState(null);
  const [deleteConfirmSubcontractor, setDeleteConfirmSubcontractor] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    contact: "",
    email: "",
    phone: "",
    location: "",
    rating: "4.5",
    orders: 0,
    status: "Active",
    notes: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const handleOpenAdd = () => {
    setEditingSubcontractor(null);
    setFormData({
      id: `SUB-00${subcontractors.length + 1}`,
      name: "",
      contact: "",
      email: "",
      phone: "",
      location: "",
      rating: "4.5",
      orders: 0,
      status: "Active",
      notes: "",
    });
    setShowModal(true);
  };

  const handleView = (subcontractor) => {
    setViewSubcontractor(subcontractor);
  };

  const handleEdit = (subcontractor) => {
    setEditingSubcontractor(subcontractor);
    setFormData({
      id: subcontractor.id,
      name: subcontractor.name || "",
      contact: subcontractor.contact || "",
      email: subcontractor.email || "",
      phone: subcontractor.phone || "",
      location: subcontractor.location || "",
      rating: subcontractor.rating || "4.5",
      orders: subcontractor.orders || 0,
      status: subcontractor.status || "Active",
      notes: subcontractor.notes || "",
    });
    setShowModal(true);
  };

  const handleDeleteClick = (subcontractor) => {
    setDeleteConfirmSubcontractor(subcontractor);
  };

  const confirmDelete = () => {
    if (deleteConfirmSubcontractor) {
      setSubcontractors(
        subcontractors.filter((s) => s.id !== deleteConfirmSubcontractor.id)
      );
      setDeleteConfirmSubcontractor(null);
      if (
        viewSubcontractor &&
        viewSubcontractor.id === deleteConfirmSubcontractor.id
      ) {
        setViewSubcontractor(null);
      }
    }
  };

  const handleSaveSubcontractor = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.name.trim()) {
      alert("Please enter a company name.");
      return;
    }

    if (editingSubcontractor) {
      setSubcontractors(
        subcontractors.map((s) =>
          s.id === editingSubcontractor.id ? { ...formData } : s
        )
      );
    } else {
      setSubcontractors([formData, ...subcontractors]);
    }

    setShowModal(false);
    setEditingSubcontractor(null);
  };

  const filteredSubcontractors = subcontractors.filter((subcontractor) => {
    const matchesSearch =
      `${subcontractor.name} ${subcontractor.contact} ${subcontractor.location} ${subcontractor.id}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || subcontractor.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="subcontractor-page glass-theme">

      <div className="subcontractor-container">

        {/* HEADER */}

        <section
          className="subcontractor-header"
          data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
        >

          <div>

            <h1>
              Subcontractors
            </h1>

            <p>
              Manage your production partners and vendors.
            </p>

          </div>

          <button
            className="sc-primary-button"
            onClick={handleOpenAdd}
          >
            <FiPlus />
            Add Subcontractor
          </button>

        </section>


        {/* STATS */}

        <section className="subcontractor-stats">

          <div className="subcontractor-stat" data-aos="zoom-in-up">

            <div className="sub-stat-icon blue">
              <FiUsers />
            </div>

            <div>
              <strong>{subcontractors.length}</strong>
              <span>Total Vendors</span>
            </div>

          </div>


          <div className="subcontractor-stat" data-aos="zoom-in-down">

            <div className="sub-stat-icon green">
              <FiCheckCircle />
            </div>

            <div>
              <strong>{subcontractors.filter((s) => s.status === "Active").length}</strong>
              <span>Active</span>
            </div>

          </div>


          <div className="subcontractor-stat" data-aos="zoom-in-up">

            <div className="sub-stat-icon orange">
              <FiClock />
            </div>

            <div>
              <strong>{subcontractors.filter((s) => s.status === "Pending").length}</strong>
              <span>Pending</span>
            </div>

          </div>


          <div className="subcontractor-stat" data-aos="zoom-in-down">

            <div className="sub-stat-icon red">
              <FiAlertCircle />
            </div>

            <div>
              <strong>{subcontractors.filter((s) => s.status === "Inactive").length}</strong>
              <span>Inactive</span>
            </div>

          </div>

        </section>


        {/* MAIN CARD */}

        <section
          className="subcontractor-card"
          data-aos="fade-up"
        >

          <div className="subcontractor-toolbar sc-toolbar">
            <div className="sc-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search subcontractors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="sc-toolbar-actions">
              <div className="sc-select">
                <FiFilter />
                <div
                  className="custom-dropdown"
                  tabIndex="0"
                  onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                >
                  <div
                    className="custom-dropdown-selected"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {statusFilter === "All" ? "All Status" : statusFilter}
                    <FiChevronDown style={{ marginLeft: "10px" }} />
                  </div>
                  {isDropdownOpen && (
                    <div className="custom-dropdown-options">
                      {["All", "Active", "Pending", "Inactive"].map((s) => (
                        <div
                          key={s}
                          className="custom-dropdown-option"
                          onClick={() => {
                            setStatusFilter(s);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {s === "All" ? "All Status" : s}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>


          {/* CARDS */}

          <div className="subcontractor-grid">

            {filteredSubcontractors.map((subcontractor) => (

              <article
                className="vendor-card" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
                key={subcontractor.id}
              >

                <div className="vendor-top">

                  <div className="vendor-avatar">
                    {subcontractor.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <span
                    className={`vendor-status ${subcontractor.status.toLowerCase()}`}
                  >
                    {subcontractor.status}
                  </span>

                </div>


                <div className="vendor-info">

                  <h3>
                    {subcontractor.name}
                  </h3>

                  <span className="vendor-id">
                    {subcontractor.id}
                  </span>

                </div>


                <div className="vendor-details">

                  <div>
                    <FiUsers />
                    <span>
                      {subcontractor.contact}
                    </span>
                  </div>

                  <div>
                    <FiMail />
                    <span>
                      {subcontractor.email}
                    </span>
                  </div>

                  <div>
                    <FiPhone />
                    <span>
                      {subcontractor.phone}
                    </span>
                  </div>

                  <div>
                    <FiMapPin />
                    <span>
                      {subcontractor.location}
                    </span>
                  </div>

                </div>


                <div className="vendor-bottom">

                  <div className="vendor-orders">

                    <strong>
                      {subcontractor.orders}
                    </strong>

                    <span>
                      Orders
                    </span>

                  </div>

                  <div className="vendor-rating">

                    <strong>
                      ★ {subcontractor.rating}
                    </strong>

                    <span>
                      Rating
                    </span>

                  </div>


                  <div className="vendor-actions">

                    <button
                      type="button"
                      title="View Subcontractor"
                      onClick={() => handleView(subcontractor)}
                    >
                      <FiEye />
                    </button>

                    <button
                      type="button"
                      title="Edit Subcontractor"
                      onClick={() => handleEdit(subcontractor)}
                    >
                      <FiEdit2 />
                    </button>

                    <button
                      type="button"
                      className="danger"
                      title="Delete Subcontractor"
                      onClick={() => handleDeleteClick(subcontractor)}
                    >
                      <FiTrash2 />
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {filteredSubcontractors.length === 0 && (
            <div className="vendor-empty">
              No subcontractors found.
            </div>
          )}

        </section>

      </div>


      {/* ADD / EDIT SUBCONTRACTOR MODAL */}

      {showModal && (

        <div
          className="sc-modal-overlay"
          onClick={() => {
            setShowModal(false);
            setEditingSubcontractor(null);
          }}
        >

          <div
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>

                <span>
                  VENDOR MANAGEMENT
                </span>

                <h2>
                  {editingSubcontractor
                    ? `Edit Subcontractor (${editingSubcontractor.id})`
                    : "Add Subcontractor"}
                </h2>

              </div>

              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditingSubcontractor(null);
                }}
              >
                <FiX />
              </button>

            </div>


            <form onSubmit={handleSaveSubcontractor}>
              <div className="modal-body">

                <div className="form-group">

                  <label>
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter company name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Contact Person
                  </label>

                  <input
                    type="text"
                    placeholder="Enter contact name"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                  />

                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="company@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />

                  </div>

                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Location
                    </label>

                    <input
                      type="text"
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Status
                    </label>

                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Inactive">Inactive</option>
                    </select>

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Notes & Specialization
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Add vendor notes or specialization..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                  ></textarea>

                </div>

              </div>


              <div className="modal-footer">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingSubcontractor(null);
                  }}
                >
                  Cancel
                </button>

                <button type="submit" className="save-button">
                  {editingSubcontractor ? "Save Changes" : "Add Subcontractor"}
                </button>

              </div>
            </form>

          </div>

        </div>

      )}


      {/* VIEW SUBCONTRACTOR DETAILS DRAWER */}

      {viewSubcontractor && (

        <div
          className="sc-modal-overlay"
          onClick={() => setViewSubcontractor(null)}
        >

          <div
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span>SUBCONTRACTOR DETAILS</span>
                <h2>{viewSubcontractor.name}</h2>
              </div>

              <button
                type="button"
                onClick={() => setViewSubcontractor(null)}
              >
                <FiX />
              </button>

            </div>


            <div className="modal-body">

              <div className="detail-item-card">
                <div className="detail-item-label">Vendor ID</div>
                <div className="detail-item-value">{viewSubcontractor.id}</div>
              </div>

              <div className="detail-grid-2">

                <div className="detail-item-card">
                  <div className="detail-item-label">Contact Person</div>
                  <div className="detail-item-value">
                    {viewSubcontractor.contact || "—"}
                  </div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Status</div>
                  <div className="detail-item-value">
                    <span
                      className={`vendor-status ${viewSubcontractor.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {viewSubcontractor.status}
                    </span>
                  </div>
                </div>

              </div>

              <div className="detail-grid-2">

                <div className="detail-item-card">
                  <div className="detail-item-label">Email</div>
                  <div className="detail-item-value">
                    {viewSubcontractor.email || "—"}
                  </div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Phone</div>
                  <div className="detail-item-value">
                    {viewSubcontractor.phone || "—"}
                  </div>
                </div>

              </div>

              <div className="detail-grid-2">

                <div className="detail-item-card">
                  <div className="detail-item-label">Location</div>
                  <div className="detail-item-value">
                    {viewSubcontractor.location || "—"}
                  </div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Rating</div>
                  <div className="detail-item-value">
                    ★ {viewSubcontractor.rating}
                  </div>
                </div>

              </div>

              <div className="detail-item-card">
                <div className="detail-item-label">Notes & Specialization</div>
                <div
                  className="detail-item-value"
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(26, 21, 18, 0.8)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {viewSubcontractor.notes ||
                    "No additional vendor notes available."}
                </div>
              </div>

            </div>


            <div className="modal-footer">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setViewSubcontractor(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="save-button"
                onClick={() => {
                  const target = viewSubcontractor;
                  setViewSubcontractor(null);
                  handleEdit(target);
                }}
              >
                <FiEdit2 style={{ marginRight: "6px" }} />
                Edit Subcontractor
              </button>

            </div>

          </div>

        </div>

      )}


      {/* DELETE CONFIRMATION DIALOG */}

      {deleteConfirmSubcontractor && (

        <div
          className="sc-confirm-overlay"
          onClick={() => setDeleteConfirmSubcontractor(null)}
        >

          <div
            className="sc-confirm-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="sc-confirm-icon">
              <FiTrash2 />
            </div>

            <h3>Delete Subcontractor?</h3>

            <p>
              Are you sure you want to delete{" "}
              <strong>{deleteConfirmSubcontractor.name}</strong> (
              {deleteConfirmSubcontractor.id})? This action cannot be undone.
            </p>

            <div className="sc-confirm-actions">

              <button
                type="button"
                className="sc-btn-cancel"
                onClick={() => setDeleteConfirmSubcontractor(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="sc-btn-delete"
                onClick={confirmDelete}
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Subcontractor;