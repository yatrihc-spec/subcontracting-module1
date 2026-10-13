import React, { useEffect, useState } from "react";

import AOS from "aos";

import {
  FiSearch,
  FiFilter,
  FiPlus,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiHome,
  FiStar,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

import "./subcontracting.css";

function Subcontracting() {

  const initialOrders = [
    {
      id: "SC-1024",
      orderCode: "PBI-3 (2026)",
      partyCode: "C3",
      itemCode: "I2",
      product: "Premium Steel Components",
      subcontractor: "Raj Engineering",
      quantity: "5,000 Pc",
      sentStock: "200.000 KG",
      returnStock: "200.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,80,000",
      unitRate: "(₹900/unit + ₹40/job)",
      returnDetailsCount: 3,
      date: "21-09-2026",
      lastReturnDate: "21-09-2026",
      expectedDate: "21-09-2026",
      status: "In Process",
      notes: "High priority order for precision industrial machinery.",
    },
    {
      id: "SC-1023",
      orderCode: "PBI-4 (2026)",
      partyCode: "M2",
      itemCode: "I4",
      product: "Industrial Brackets",
      subcontractor: "Mehta Industries",
      quantity: "850 Pc",
      sentStock: "120.000 KG",
      returnStock: "120.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,15,000",
      unitRate: "(₹850/unit + ₹35/job)",
      returnDetailsCount: 2,
      date: "07 Oct 2026",
      lastReturnDate: "07 Oct 2026",
      expectedDate: "15 Oct 2026",
      status: "Completed",
      notes: "Quality check approved and ready for dispatch.",
    },
    {
      id: "SC-1022",
      orderCode: "PBI-5 (2026)",
      partyCode: "S1",
      itemCode: "I1",
      product: "Machine Housing",
      subcontractor: "Shree Fabrication",
      quantity: "420 Pc",
      sentStock: "85.000 KG",
      returnStock: "40.000 KG",
      usedStock: "45.000 KG",
      totalValue: "₹68,000",
      unitRate: "(₹600/unit + ₹30/job)",
      returnDetailsCount: 1,
      date: "06 Oct 2026",
      lastReturnDate: "06 Oct 2026",
      expectedDate: "18 Oct 2026",
      status: "Pending",
      notes: "Awaiting material verification from vendor.",
    },
    {
      id: "SC-1021",
      orderCode: "PBI-6 (2026)",
      partyCode: "P4",
      itemCode: "I3",
      product: "Metal Frames",
      subcontractor: "Patel Works",
      quantity: "670 Pc",
      sentStock: "140.000 KG",
      returnStock: "90.000 KG",
      usedStock: "50.000 KG",
      totalValue: "₹92,000",
      unitRate: "(₹700/unit + ₹35/job)",
      returnDetailsCount: 2,
      date: "05 Oct 2026",
      lastReturnDate: "05 Oct 2026",
      expectedDate: "16 Oct 2026",
      status: "In Process",
      notes: "Assembly and welding in progress.",
    },
    {
      id: "SC-1020",
      orderCode: "PBI-7 (2026)",
      partyCode: "A5",
      itemCode: "I5",
      product: "Precision Shafts",
      subcontractor: "Apex Engineering",
      quantity: "320 Pc",
      sentStock: "65.000 KG",
      returnStock: "65.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹54,000",
      unitRate: "(₹800/unit + ₹40/job)",
      returnDetailsCount: 2,
      date: "04 Oct 2026",
      lastReturnDate: "04 Oct 2026",
      expectedDate: "12 Oct 2026",
      status: "Completed",
      notes: "Delivered on schedule with full documentation.",
    },
    {
      id: "SC-1019",
      orderCode: "PBI-8 (2026)",
      partyCode: "K6",
      itemCode: "I6",
      product: "Steel Plates",
      subcontractor: "Krishna Works",
      quantity: "950 Pc",
      sentStock: "210.000 KG",
      returnStock: "100.000 KG",
      usedStock: "110.000 KG",
      totalValue: "₹1,45,000",
      unitRate: "(₹750/unit + ₹30/job)",
      returnDetailsCount: 1,
      date: "03 Oct 2026",
      lastReturnDate: "03 Oct 2026",
      expectedDate: "14 Oct 2026",
      status: "Pending",
      notes: "Initial purchase order sent for confirmation.",
    },
    {
      id: "SC-1018",
      orderCode: "PBI-9 (2026)",
      partyCode: "R2",
      itemCode: "I7",
      product: "Hydraulic Cylinders",
      subcontractor: "Raj Engineering",
      quantity: "450 Pc",
      sentStock: "160.000 KG",
      returnStock: "160.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,32,000",
      unitRate: "(₹880/unit + ₹45/job)",
      returnDetailsCount: 2,
      date: "02 Oct 2026",
      lastReturnDate: "02 Oct 2026",
      expectedDate: "10 Oct 2026",
      status: "Completed",
      notes: "Hydrostatic pressure testing cleared.",
    },
    {
      id: "SC-1017",
      orderCode: "PBI-10 (2026)",
      partyCode: "M3",
      itemCode: "I8",
      product: "CNC Turned Bushings",
      subcontractor: "Mehta Industries",
      quantity: "1,200 Pc",
      sentStock: "95.000 KG",
      returnStock: "50.000 KG",
      usedStock: "45.000 KG",
      totalValue: "₹78,000",
      unitRate: "(₹450/unit + ₹25/job)",
      returnDetailsCount: 2,
      date: "01 Oct 2026",
      lastReturnDate: "01 Oct 2026",
      expectedDate: "11 Oct 2026",
      status: "In Process",
      notes: "Lathe tooling calibration complete, second batch running.",
    },
    {
      id: "SC-1016",
      orderCode: "PBI-11 (2026)",
      partyCode: "S2",
      itemCode: "I2",
      product: "Sheet Metal Covers",
      subcontractor: "Shree Fabrication",
      quantity: "580 Pc",
      sentStock: "115.000 KG",
      returnStock: "30.000 KG",
      usedStock: "85.000 KG",
      totalValue: "₹84,000",
      unitRate: "(₹620/unit + ₹30/job)",
      returnDetailsCount: 1,
      date: "30 Sep 2026",
      lastReturnDate: "30 Sep 2026",
      expectedDate: "09 Oct 2026",
      status: "Pending",
      notes: "Laser cutting completed, awaiting powder coating approval.",
    },
    {
      id: "SC-1015",
      orderCode: "PBI-12 (2026)",
      partyCode: "P2",
      itemCode: "I9",
      product: "Flange Adapters",
      subcontractor: "Patel Works",
      quantity: "760 Pc",
      sentStock: "130.000 KG",
      returnStock: "130.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹98,500",
      unitRate: "(₹690/unit + ₹35/job)",
      returnDetailsCount: 3,
      date: "29 Sep 2026",
      lastReturnDate: "29 Sep 2026",
      expectedDate: "08 Oct 2026",
      status: "Completed",
      notes: "Surface finishing and zinc plating verified.",
    },
    {
      id: "SC-1014",
      orderCode: "PBI-13 (2026)",
      partyCode: "A2",
      itemCode: "I4",
      product: "Heavy Duty Bearings",
      subcontractor: "Apex Engineering",
      quantity: "310 Pc",
      sentStock: "75.000 KG",
      returnStock: "40.000 KG",
      usedStock: "35.000 KG",
      totalValue: "₹62,000",
      unitRate: "(₹850/unit + ₹40/job)",
      returnDetailsCount: 2,
      date: "28 Sep 2026",
      lastReturnDate: "28 Sep 2026",
      expectedDate: "07 Oct 2026",
      status: "In Process",
      notes: "Inner and outer race grinding in progress.",
    },
    {
      id: "SC-1013",
      orderCode: "PBI-14 (2026)",
      partyCode: "K3",
      itemCode: "I1",
      product: "Gearbox Enclosures",
      subcontractor: "Krishna Works",
      quantity: "290 Pc",
      sentStock: "180.000 KG",
      returnStock: "60.000 KG",
      usedStock: "120.000 KG",
      totalValue: "₹1,05,000",
      unitRate: "(₹920/unit + ₹50/job)",
      returnDetailsCount: 1,
      date: "27 Sep 2026",
      lastReturnDate: "27 Sep 2026",
      expectedDate: "06 Oct 2026",
      status: "Pending",
      notes: "Awaiting casting raw material delivery.",
    },
    {
      id: "SC-1012",
      orderCode: "PBI-15 (2026)",
      partyCode: "R4",
      itemCode: "I5",
      product: "Cast Iron Pulleys",
      subcontractor: "Raj Engineering",
      quantity: "640 Pc",
      sentStock: "155.000 KG",
      returnStock: "155.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹89,000",
      unitRate: "(₹610/unit + ₹30/job)",
      returnDetailsCount: 2,
      date: "26 Sep 2026",
      lastReturnDate: "26 Sep 2026",
      expectedDate: "05 Oct 2026",
      status: "Completed",
      notes: "Dynamic balancing report verified.",
    },
    {
      id: "SC-1011",
      orderCode: "PBI-16 (2026)",
      partyCode: "M5",
      itemCode: "I3",
      product: "Conveyor Rollers",
      subcontractor: "Mehta Industries",
      quantity: "880 Pc",
      sentStock: "190.000 KG",
      returnStock: "120.000 KG",
      usedStock: "70.000 KG",
      totalValue: "₹1,12,000",
      unitRate: "(₹720/unit + ₹35/job)",
      returnDetailsCount: 2,
      date: "25 Sep 2026",
      lastReturnDate: "25 Sep 2026",
      expectedDate: "04 Oct 2026",
      status: "In Process",
      notes: "Bearing press fitting under quality inspection.",
    },
    {
      id: "SC-1010",
      orderCode: "PBI-17 (2026)",
      partyCode: "S4",
      itemCode: "I6",
      product: "Fastener Assemblies",
      subcontractor: "Shree Fabrication",
      quantity: "1,500 Pc",
      sentStock: "90.000 KG",
      returnStock: "90.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹56,000",
      unitRate: "(₹380/unit + ₹20/job)",
      returnDetailsCount: 3,
      date: "24 Sep 2026",
      lastReturnDate: "24 Sep 2026",
      expectedDate: "03 Oct 2026",
      status: "Completed",
      notes: "Bulk packing completed with barcoded tags.",
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [viewOrder, setViewOrder] = useState(null);
  const [deleteConfirmOrder, setDeleteConfirmOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Status Modal Drawer state (opens photo card in Create Order slide-in drawer)
  const [statusModalOrder, setStatusModalOrder] = useState(null);
  const [openStatusDropdownOrderId, setOpenStatusDropdownOrderId] = useState(null);
  const [expandedReturns, setExpandedReturns] = useState({});

  const [formData, setFormData] = useState({
    id: "",
    product: "",
    subcontractor: "Raj Engineering",
    quantity: "",
    date: "",
    expectedDate: "",
    status: "In Process",
    notes: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });

    const handleOutsideClick = (e) => {
      if (
        !e.target.closest(".table-status-cell-wrapper") &&
        !e.target.closest(".order-status-dropdown-container")
      ) {
        setOpenStatusDropdownOrderId(null);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  const toggleStatusDropdown = (id) => {
    setOpenStatusDropdownOrderId((prev) => (prev === id ? null : id));
  };

  const toggleReturnDetails = (orderId) => {
    setExpandedReturns((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }));
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    if (statusModalOrder && statusModalOrder.id === orderId) {
      setStatusModalOrder((prev) => ({ ...prev, status: newStatus }));
    }
    setOpenStatusDropdownOrderId(null);
  };

  const handleOpenCreate = () => {
    setEditingOrder(null);
    setFormData({
      id: `SC-${Math.floor(1025 + Math.random() * 900)}`,
      product: "",
      subcontractor: "Raj Engineering",
      quantity: "",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      expectedDate: "",
      status: "In Progress",
      notes: "",
    });
    setShowModal(true);
  };

  const handleView = (order) => {
    setViewOrder(order);
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setFormData({
      id: order.id,
      product: order.product,
      subcontractor: order.subcontractor,
      quantity: order.quantity,
      date: order.date || "",
      expectedDate: order.expectedDate || "",
      status: order.status || "In Progress",
      notes: order.notes || "",
    });
    setShowModal(true);
  };

  const handleDeleteClick = (order) => {
    setDeleteConfirmOrder(order);
  };

  const confirmDelete = () => {
    if (deleteConfirmOrder) {
      setOrders(orders.filter((o) => o.id !== deleteConfirmOrder.id));
      setDeleteConfirmOrder(null);
      if (viewOrder && viewOrder.id === deleteConfirmOrder.id) {
        setViewOrder(null);
      }
    }
  };

  const handleSaveOrder = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.product.trim()) {
      alert("Please enter a product name.");
      return;
    }

    if (editingOrder) {
      setOrders(
        orders.map((o) => (o.id === editingOrder.id ? { ...formData } : o))
      );
    } else {
      setOrders([formData, ...orders]);
    }

    setShowModal(false);
    setEditingOrder(null);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase()) ||
      order.subcontractor.toLowerCase().includes(search.toLowerCase()) ||
      (order.orderCode && order.orderCode.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus =
      statusFilter === "All" ||
      order.status === statusFilter ||
      (statusFilter === "In Progress" && order.status === "In Process") ||
      (statusFilter === "In Process" && order.status === "In Progress");

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="subcontracting-page glass-theme">

      <div className="subcontracting-container">

        {/* HEADER */}

        <section
          className="subcontracting-header"
          
        >

          <div>

            <h1>
              Subcontracting
            </h1>

            <p>
              Manage and monitor all subcontracting orders.
            </p>

          </div>

          <button
            className="sc-primary-button"
            onClick={handleOpenCreate}
          >
            <FiPlus />
            Create Order
          </button>

        </section>


        {/* STATS */}

        <section className="sc-stats">

          <div className="sc-stat" data-aos="zoom-in">
            <div className="sc-stat-icon blue">
              <FiPackage />
            </div>

            <div>
              <strong>{orders.length}</strong>
              <span>Total Orders</span>
            </div>
          </div>

          <div className="sc-stat" data-aos="zoom-out">
            <div className="sc-stat-icon orange">
              <FiClock />
            </div>

            <div>
              <strong>{orders.filter((o) => o.status === "Pending").length}</strong>
              <span>Pending</span>
            </div>
          </div>

          <div className="sc-stat"data-aos="zoom-in">
            <div className="sc-stat-icon blue">
              <FiPackage />
            </div>

            <div>
              <strong>
                {
                  orders.filter(
                    (o) => o.status === "In Progress" || o.status === "In Process"
                  ).length
                }
              </strong>
              <span>In Progress</span>
            </div>
          </div>

          <div className="sc-stat" data-aos="zoom-out">
            <div className="sc-stat-icon green">
              <FiCheckCircle />
            </div>

            <div>
              <strong>{orders.filter((o) => o.status === "Completed").length}</strong>
              <span>Completed</span>
            </div>
          </div>

        </section>


        {/* TABLE CARD */}

        <section
          className="subcontracting-card"
          data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0"
        >

          <div className="sc-toolbar">

            <div className="sc-search">

              <FiSearch />

              <input
                type="text"
                placeholder="Search orders..."
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
                  <div className="custom-dropdown-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {statusFilter === 'All' ? 'All Status' : statusFilter}
                    <FiChevronDown style={{ marginLeft: '10px' }} />
                  </div>
                  {isDropdownOpen && (
                    <div className="custom-dropdown-options">
                      {['All', 'Pending', 'In Progress', 'Completed'].map(status => (
                        <div 
                          key={status}
                          className="custom-dropdown-option"
                          onClick={() => {
                            setStatusFilter(status);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {status === 'All' ? 'All Status' : status}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* <FiChevronDown /> */}

              </div>


              <button className="date-button">
                <FiCalendar />
                October 2026
              </button>

            </div>

          </div>


          {/* TABLE */}

          <div className="sc-table-wrapper">

            <table className="sc-table">

              <thead>

                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Subcontractor</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {paginatedOrders.map((order) => (

                  <tr key={order.id}>

                    <td>
                      <strong className="order-id">
                        {order.id}
                      </strong>
                    </td>

                    <td>
                      <span className="product-name">
                        {order.product}
                      </span>
                    </td>

                    <td>
                      <span className="subcontractor-name">
                        {order.subcontractor}
                      </span>
                    </td>

                    <td>
                      {order.quantity}
                    </td>

                    <td>
                      <span className="date-text">
                        {order.date}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className={`sc-status sc-status-interactive ${order.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        onClick={() => setStatusModalOrder(order)}
                        title="Click to view details & update status"
                      >
                        {order.status}
                      </button>
                    </td>

                    <td>

                      <div className="table-actions">

                        <button
                          type="button"
                          title="View Order Details"
                          onClick={() => handleView(order)}
                        >
                          <FiEye />
                        </button>

                        <button
                          type="button"
                          title="Edit Order"
                          onClick={() => handleEdit(order)}
                        >
                          <FiEdit2 />
                        </button>

                        <button
                          type="button"
                          className="delete"
                          title="Delete Order"
                          onClick={() => handleDeleteClick(order)}
                        >
                          <FiTrash2 />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            {filteredOrders.length === 0 && (
              <div className="empty-orders">
                No orders found.
              </div>
            )}

          </div>


          {/* FOOTER */}

          <div className="sc-table-footer">

            <span>
              Showing {filteredOrders.length === 0 ? 0 : startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of{" "}
              {filteredOrders.length} orders
            </span>

            <div className="pagination">

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={validCurrentPage === 1}
                title="Previous page"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  className={validCurrentPage === pageNum ? "active" : ""}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={validCurrentPage === totalPages}
                title="Next page"
              >
                ›
              </button>

            </div>

          </div>

        </section>

      </div>


      {/* CREATE / EDIT ORDER DRAWER */}

      {showModal && (

        <div
          className="sc-modal-overlay"
          onClick={() => {
            setShowModal(false);
            setEditingOrder(null);
          }}
        >

          <div
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span>{editingOrder ? "EDIT ORDER" : "NEW ORDER"}</span>
                <h2>{editingOrder ? `Edit Order ${editingOrder.id}` : "Create Subcontracting Order"}</h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditingOrder(null);
                }}
              >
                <FiX />
              </button>

            </div>


            <form onSubmit={handleSaveOrder}>
              <div className="modal-body">

                <div className="form-group">

                  <label>
                    Product Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter product name"
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    required
                  />

                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Subcontractor
                    </label>

                    <select
                      value={formData.subcontractor}
                      onChange={(e) => setFormData({ ...formData, subcontractor: e.target.value })}
                    >
                      <option value="Raj Engineering">Raj Engineering</option>
                      <option value="Mehta Industries">Mehta Industries</option>
                      <option value="Shree Fabrication">Shree Fabrication</option>
                      <option value="Patel Works">Patel Works</option>
                      <option value="Apex Engineering">Apex Engineering</option>
                      <option value="Krishna Works">Krishna Works</option>
                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Quantity
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 1,250"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />

                  </div>

                </div>


                <div className="form-grid">

                  <div className="form-group">

                    <label>
                      Status
                    </label>

                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Order Date
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 08 Oct 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label>
                    Notes
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Add order notes or specifications..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>

                </div>

              </div>


              <div className="modal-footer">

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingOrder(null);
                  }}
                >
                  Cancel
                </button>

                <button type="submit" className="save-button">
                  {editingOrder ? "Save Changes" : "Create Order"}
                </button>

              </div>
            </form>

          </div>

        </div>

      )}


      {/* VIEW ORDER DETAILS DRAWER */}

      {viewOrder && (

        <div
          className="sc-modal-overlay"
          onClick={() => setViewOrder(null)}
        >

          <div
            className="sc-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span>ORDER DETAILS</span>
                <h2>{viewOrder.id}</h2>
              </div>

              <button
                type="button"
                onClick={() => setViewOrder(null)}
              >
                <FiX />
              </button>

            </div>


            <div className="modal-body">

              <div className="detail-item-card">
                <div className="detail-item-label">Product Name</div>
                <div className="detail-item-value">{viewOrder.product}</div>
              </div>

              <div className="detail-grid-2">

                <div className="detail-item-card">
                  <div className="detail-item-label">Subcontractor</div>
                  <div className="detail-item-value">{viewOrder.subcontractor}</div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Quantity</div>
                  <div className="detail-item-value">{viewOrder.quantity || "—"}</div>
                </div>

              </div>

              <div className="detail-grid-2">

                <div className="detail-item-card">
                  <div className="detail-item-label">Order Date</div>
                  <div className="detail-item-value">{viewOrder.date || "—"}</div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Status</div>
                  <div className="detail-item-value">
                    <span
                      className={`sc-status ${viewOrder.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {viewOrder.status}
                    </span>
                  </div>
                </div>

              </div>

              <div className="detail-item-card">
                <div className="detail-item-label">Notes & Specifications</div>
                <div
                  className="detail-item-value"
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "rgba(26, 21, 18, 0.8)",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {viewOrder.notes || "No additional notes provided for this order."}
                </div>
              </div>

            </div>


            <div className="modal-footer">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setViewOrder(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="save-button"
                onClick={() => {
                  const target = viewOrder;
                  setViewOrder(null);
                  handleEdit(target);
                }}
              >
                <FiEdit2 style={{ marginRight: "6px" }} />
                Edit Order
              </button>

            </div>

          </div>

        </div>

      )}


      {/* STATUS & PROCESS DRAWER MODAL (LIKE CREATE ORDER, BLURS WHOLE PAGE) */}

      {statusModalOrder && (

        <div
          className="sc-modal-overlay"
          onClick={() => setStatusModalOrder(null)}
        >

          <div
            className="sc-modal status-process-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-header">

              <div>
                <span>ORDER PROCESS & STATUS</span>
                <h2>{statusModalOrder.orderCode || statusModalOrder.id}</h2>
              </div>

              <button
                type="button"
                onClick={() => setStatusModalOrder(null)}
              >
                <FiX />
              </button>

            </div>


            <div className="modal-body">

              <div className="order-card-preview">

                {/* CARD TOP */}
                <div className="order-card-top">

                  <div className="order-card-title-area">

                    <div className="order-card-title-row">
                      <span className="order-card-title">
                        {statusModalOrder.orderCode || `${statusModalOrder.id} (2026)`}
                      </span>

                      <button
                        type="button"
                        className="order-card-icon-btn edit-icon"
                        title="Edit Order"
                        onClick={() => {
                          const target = statusModalOrder;
                          setStatusModalOrder(null);
                          handleEdit(target);
                        }}
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        type="button"
                        className="order-card-icon-btn delete-icon"
                        title="Delete Order"
                        onClick={() => {
                          const target = statusModalOrder;
                          setStatusModalOrder(null);
                          handleDeleteClick(target);
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <span className="order-card-subtitle">
                      {statusModalOrder.partyCode || "C3"}
                    </span>

                  </div>

                  <div className="order-card-center-code">
                    {statusModalOrder.itemCode || "I2"}
                  </div>

                  <div className="order-card-dates">
                    <div>Order Date : {statusModalOrder.date || "21-09-2026"}</div>
                    <div>
                      Last Return :{" "}
                      {statusModalOrder.lastReturnDate ||
                        statusModalOrder.expectedDate ||
                        "21-09-2026"}
                    </div>
                  </div>

                </div>

                {/* TWO DETAILS BOXES */}
                <div className="order-card-details-grid">

                  {/* SENT DETAILS */}
                  <div className="order-sent-box">
                    <div className="order-box-header">SENT DETAILS</div>
                    <div className="order-box-row">
                      <span>Sent Stock</span>
                      <strong>{statusModalOrder.sentStock || "200.000 KG"}</strong>
                    </div>
                    <div className="order-box-row">
                      <span>Total Pieces</span>
                      <strong>{statusModalOrder.quantity || "5,000 Pc"}</strong>
                    </div>
                    <div className="order-box-divider"></div>
                    <div className="order-box-total-row">
                      <span className="order-box-total-label">Total Value</span>
                      <div className="order-box-total-val-wrap">
                        <div className="order-box-total-val">
                          {statusModalOrder.totalValue || "₹1,80,000"}
                        </div>
                        <div className="order-box-total-sub">
                          {statusModalOrder.unitRate || "(₹900/unit + ₹40/job)"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RETURN DETAILS */}
                  <div className="order-return-box">
                    <div className="order-return-header">
                      <span className="order-return-title">
                        RETURN DETAILS ({statusModalOrder.returnDetailsCount || 3})
                      </span>
                      <button
                        type="button"
                        className="order-return-expand-btn"
                        onClick={() => toggleReturnDetails(statusModalOrder.id)}
                      >
                        {expandedReturns[statusModalOrder.id] ? "COLLAPSE ▲" : "EXPAND ▼"}
                      </button>
                    </div>

                    {expandedReturns[statusModalOrder.id] && (
                      <div className="order-return-items-list">
                        <div className="order-return-item-line">
                          <span>Batch 1 (100.000 KG)</span>
                          <span>Verified</span>
                        </div>
                        <div className="order-return-item-line">
                          <span>Batch 2 (60.000 KG)</span>
                          <span>Verified</span>
                        </div>
                        <div className="order-return-item-line">
                          <span>Batch 3 (40.000 KG)</span>
                          <span>Verified</span>
                        </div>
                      </div>
                    )}

                    <div className="order-return-divider"></div>
                    <div className="order-return-row">
                      <span>Total Net Return</span>
                      <strong>{statusModalOrder.returnStock || "200.000 KG"}</strong>
                    </div>
                    <div className="order-return-row">
                      <span>USED STOCK</span>
                      <strong>{statusModalOrder.usedStock || "0.000 KG"}</strong>
                    </div>
                  </div>

                </div>

                {/* PROCESSES */}
                <div className="order-processes-section">
                  <div className="order-processes-label">Processes</div>
                  <div className="order-processes-actions">
                    <div className="order-status-dropdown-container">
                      <button
                        type="button"
                        className={`order-process-status-btn ${statusModalOrder.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        onClick={() =>
                          toggleStatusDropdown(`card-${statusModalOrder.id}`)
                        }
                      >
                        <span>{statusModalOrder.status}</span>
                        <FiChevronDown />
                      </button>

                      {openStatusDropdownOrderId === `card-${statusModalOrder.id}` && (
                        <div className="order-status-dropdown-menu">
                          {["In Process", "Pending", "Completed"].map((s) => (
                            <div
                              key={s}
                              className={`order-status-dropdown-item ${
                                statusModalOrder.status === s ? "selected" : ""
                              }`}
                              onClick={() => handleStatusChange(statusModalOrder.id, s)}
                            >
                              <span
                                className={`status-dot-sm ${s
                                  .toLowerCase()
                                  .replace(" ", "-")}`}
                              ></span>
                              {s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="order-return-record-btn"
                      onClick={() => {
                        alert(
                          `Return Record logged for order ${
                            statusModalOrder.orderCode || statusModalOrder.id
                          }!`
                        );
                      }}
                    >
                      <FiCheckCircle />
                      <span>Return Record</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>


            <div className="modal-footer">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setStatusModalOrder(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="save-button"
                onClick={() => setStatusModalOrder(null)}
              >
                Done
              </button>

            </div>

          </div>

        </div>

      )}


      {/* DELETE CONFIRMATION DIALOG */}

      {deleteConfirmOrder && (

        <div
          className="sc-confirm-overlay"
          onClick={() => setDeleteConfirmOrder(null)}
        >

          <div
            className="sc-confirm-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="sc-confirm-icon">
              <FiTrash2 />
            </div>

            <h3>Delete Order?</h3>

            <p>
              Are you sure you want to delete order{" "}
              <strong>{deleteConfirmOrder.id}</strong> (
              {deleteConfirmOrder.product})? This action cannot be undone.
            </p>

            <div className="sc-confirm-actions">

              <button
                type="button"
                className="sc-btn-cancel"
                onClick={() => setDeleteConfirmOrder(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="sc-btn-delete"
                onClick={confirmDelete}
              >
                Delete Order
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Subcontracting;