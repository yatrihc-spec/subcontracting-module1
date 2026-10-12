import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiPlus,
  FiSearch,
  FiDownload,
  FiChevronDown,
  FiCalendar,
  FiPackage,
  FiClock,
  FiCheckCircle,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX,
  FiLayers,
} from "react-icons/fi";

import "./crome.css";

function Crome() {
  const initialCromeOrders = [
    {
      id: "CR-101",
      orderCode: "CRM-1 (2026)",
      partyCode: "CP-1",
      itemCode: "CH-2",
      product: "Hard Chrome Hydraulic Rods",
      subcontractor: "Apex Chrome Works",
      quantity: "650 Pc",
      sentStock: "180.000 KG",
      returnStock: "180.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,45,000",
      unitRate: "(₹750/unit + ₹45/job)",
      returnDetailsCount: 3,
      platingType: "Hard Chrome (25-30 Micron)",
      date: "08 Oct 2026",
      lastReturnDate: "08 Oct 2026",
      expectedDate: "16 Oct 2026",
      status: "In Process",
      notes: "Precision ground rods requiring mirror finish Ra < 0.2µm.",
    },
    {
      id: "CR-102",
      orderCode: "CRM-2 (2026)",
      partyCode: "CP-2",
      itemCode: "CH-5",
      product: "Chrome Plated Piston Shafts",
      subcontractor: "Gujarat Plating Ltd",
      quantity: "420 Pc",
      sentStock: "120.000 KG",
      returnStock: "120.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹98,000",
      unitRate: "(₹820/unit + ₹35/job)",
      returnDetailsCount: 2,
      platingType: "Flash Chrome (15 Micron)",
      date: "07 Oct 2026",
      lastReturnDate: "07 Oct 2026",
      expectedDate: "15 Oct 2026",
      status: "Completed",
      notes: "Surface hardness 65-68 HRC cleared inspection.",
    },
    {
      id: "CR-103",
      orderCode: "CRM-3 (2026)",
      partyCode: "CP-3",
      itemCode: "CH-1",
      product: "Industrial Roller Plating",
      subcontractor: "Shree Surface Tech",
      quantity: "310 Pc",
      sentStock: "210.000 KG",
      returnStock: "90.000 KG",
      usedStock: "120.000 KG",
      totalValue: "₹1,85,000",
      unitRate: "(₹950/unit + ₹50/job)",
      returnDetailsCount: 1,
      platingType: "Industrial Hard Chrome (40 Micron)",
      date: "06 Oct 2026",
      lastReturnDate: "06 Oct 2026",
      expectedDate: "18 Oct 2026",
      status: "Pending",
      notes: "Awaiting thickness test calibration.",
    },
    {
      id: "CR-104",
      orderCode: "CRM-4 (2026)",
      partyCode: "CP-4",
      itemCode: "CH-3",
      product: "Decorative Chrome Trim Caps",
      subcontractor: "Modern Chrome Finishes",
      quantity: "1,200 Pc",
      sentStock: "95.000 KG",
      returnStock: "60.000 KG",
      usedStock: "35.000 KG",
      totalValue: "₹76,000",
      unitRate: "(₹480/unit + ₹25/job)",
      returnDetailsCount: 2,
      platingType: "Decorative Bright Chrome (10 Micron)",
      date: "05 Oct 2026",
      lastReturnDate: "05 Oct 2026",
      expectedDate: "14 Oct 2026",
      status: "In Process",
      notes: "Mirror gloss finish for automotive exterior assembly.",
    },
    {
      id: "CR-105",
      orderCode: "CRM-5 (2026)",
      partyCode: "CP-5",
      itemCode: "CH-4",
      product: "Cylinder Bore Plated Liners",
      subcontractor: "Super Electroplaters",
      quantity: "580 Pc",
      sentStock: "165.000 KG",
      returnStock: "165.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,24,000",
      unitRate: "(₹780/unit + ₹40/job)",
      returnDetailsCount: 2,
      platingType: "Porous Chrome (30 Micron)",
      date: "04 Oct 2026",
      lastReturnDate: "04 Oct 2026",
      expectedDate: "12 Oct 2026",
      status: "Completed",
      notes: "Salt spray test 96 hours passed without corrosion.",
    },
    {
      id: "CR-106",
      orderCode: "CRM-6 (2026)",
      partyCode: "CP-1",
      itemCode: "CH-6",
      product: "Chrome Plated Spindle Bearings",
      subcontractor: "Apex Chrome Works",
      quantity: "750 Pc",
      sentStock: "135.000 KG",
      returnStock: "70.000 KG",
      usedStock: "65.000 KG",
      totalValue: "₹1,10,000",
      unitRate: "(₹650/unit + ₹35/job)",
      returnDetailsCount: 1,
      platingType: "Hard Chrome (20 Micron)",
      date: "03 Oct 2026",
      lastReturnDate: "03 Oct 2026",
      expectedDate: "13 Oct 2026",
      status: "Pending",
      notes: "Microcracked chrome structure for oil retention.",
    },
    {
      id: "CR-107",
      orderCode: "CRM-7 (2026)",
      partyCode: "CP-2",
      itemCode: "CH-7",
      product: "Chrome Exhaust Tips",
      subcontractor: "Gujarat Plating Ltd",
      quantity: "890 Pc",
      sentStock: "175.000 KG",
      returnStock: "175.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,38,000",
      unitRate: "(₹720/unit + ₹35/job)",
      returnDetailsCount: 3,
      platingType: "Dual Nickel Chrome (15 Micron)",
      date: "02 Oct 2026",
      lastReturnDate: "02 Oct 2026",
      expectedDate: "11 Oct 2026",
      status: "Completed",
      notes: "High temperature chrome bath treatment completed.",
    },
    {
      id: "CR-108",
      orderCode: "CRM-8 (2026)",
      partyCode: "CP-3",
      itemCode: "CH-8",
      product: "Cast Iron Guide Bushings",
      subcontractor: "Shree Surface Tech",
      quantity: "480 Pc",
      sentStock: "90.000 KG",
      returnStock: "45.000 KG",
      usedStock: "45.000 KG",
      totalValue: "₹82,000",
      unitRate: "(₹600/unit + ₹30/job)",
      returnDetailsCount: 2,
      platingType: "Wear Resistant Chrome (25 Micron)",
      date: "01 Oct 2026",
      lastReturnDate: "01 Oct 2026",
      expectedDate: "10 Oct 2026",
      status: "In Process",
      notes: "Electrolytic degreasing complete, plating ongoing.",
    },
    {
      id: "CR-109",
      orderCode: "CRM-9 (2026)",
      partyCode: "CP-4",
      itemCode: "CH-2",
      product: "Pneumatic Cylinder Rods",
      subcontractor: "Modern Chrome Finishes",
      quantity: "360 Pc",
      sentStock: "110.000 KG",
      returnStock: "50.000 KG",
      usedStock: "60.000 KG",
      totalValue: "₹94,000",
      unitRate: "(₹850/unit + ₹40/job)",
      returnDetailsCount: 1,
      platingType: "Hard Chrome (30 Micron)",
      date: "30 Sep 2026",
      lastReturnDate: "30 Sep 2026",
      expectedDate: "09 Oct 2026",
      status: "Pending",
      notes: "Awaiting surface grinding post chrome dip.",
    },
    {
      id: "CR-110",
      orderCode: "CRM-10 (2026)",
      partyCode: "CP-5",
      itemCode: "CH-9",
      product: "Precision Plated Couplers",
      subcontractor: "Super Electroplaters",
      quantity: "1,100 Pc",
      sentStock: "130.000 KG",
      returnStock: "130.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,15,000",
      unitRate: "(₹520/unit + ₹25/job)",
      returnDetailsCount: 3,
      platingType: "Thin Dense Chrome (8-10 Micron)",
      date: "29 Sep 2026",
      lastReturnDate: "29 Sep 2026",
      expectedDate: "08 Oct 2026",
      status: "Completed",
      notes: "Zero hydrogen embrittlement baking certified.",
    },
    {
      id: "CR-111",
      orderCode: "CRM-11 (2026)",
      partyCode: "CP-1",
      itemCode: "CH-3",
      product: "Heavy Duty Caliper Pins",
      subcontractor: "Apex Chrome Works",
      quantity: "620 Pc",
      sentStock: "85.000 KG",
      returnStock: "40.000 KG",
      usedStock: "45.000 KG",
      totalValue: "₹72,000",
      unitRate: "(₹610/unit + ₹30/job)",
      returnDetailsCount: 2,
      platingType: "Hard Chrome (20 Micron)",
      date: "28 Sep 2026",
      lastReturnDate: "28 Sep 2026",
      expectedDate: "07 Oct 2026",
      status: "In Process",
      notes: "Anode positioning verified for uniform coating.",
    },
    {
      id: "CR-112",
      orderCode: "CRM-12 (2026)",
      partyCode: "CP-2",
      itemCode: "CH-5",
      product: "Valve Stems & Seat Rings",
      subcontractor: "Gujarat Plating Ltd",
      quantity: "940 Pc",
      sentStock: "145.000 KG",
      returnStock: "145.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,28,000",
      unitRate: "(₹690/unit + ₹35/job)",
      returnDetailsCount: 2,
      platingType: "Industrial Hard Chrome (25 Micron)",
      date: "27 Sep 2026",
      lastReturnDate: "27 Sep 2026",
      expectedDate: "06 Oct 2026",
      status: "Completed",
      notes: "Thickness gauge verified at 4 quadrant points.",
    },
    {
      id: "CR-113",
      orderCode: "CRM-13 (2026)",
      partyCode: "CP-3",
      itemCode: "CH-1",
      product: "Extrusion Die Components",
      subcontractor: "Shree Surface Tech",
      quantity: "270 Pc",
      sentStock: "190.000 KG",
      returnStock: "60.000 KG",
      usedStock: "130.000 KG",
      totalValue: "₹1,55,000",
      unitRate: "(₹980/unit + ₹55/job)",
      returnDetailsCount: 1,
      platingType: "High Wear Hard Chrome (50 Micron)",
      date: "26 Sep 2026",
      lastReturnDate: "26 Sep 2026",
      expectedDate: "05 Oct 2026",
      status: "Pending",
      notes: "Custom jig fixture required for complex profile.",
    },
    {
      id: "CR-114",
      orderCode: "CRM-14 (2026)",
      partyCode: "CP-4",
      itemCode: "CH-4",
      product: "Steering Column Tubes",
      subcontractor: "Modern Chrome Finishes",
      quantity: "530 Pc",
      sentStock: "115.000 KG",
      returnStock: "60.000 KG",
      usedStock: "55.000 KG",
      totalValue: "₹88,000",
      unitRate: "(₹710/unit + ₹35/job)",
      returnDetailsCount: 2,
      platingType: "Semi-Bright Chrome (18 Micron)",
      date: "25 Sep 2026",
      lastReturnDate: "25 Sep 2026",
      expectedDate: "04 Oct 2026",
      status: "In Process",
      notes: "Polishing cycle 2 underway before final bath.",
    },
    {
      id: "CR-115",
      orderCode: "CRM-15 (2026)",
      partyCode: "CP-5",
      itemCode: "CH-8",
      product: "Turbine Blade Pins",
      subcontractor: "Super Electroplaters",
      quantity: "1,400 Pc",
      sentStock: "105.000 KG",
      returnStock: "105.000 KG",
      usedStock: "0.000 KG",
      totalValue: "₹1,60,000",
      unitRate: "(₹550/unit + ₹30/job)",
      returnDetailsCount: 3,
      platingType: "Aero-Grade Hard Chrome (20 Micron)",
      date: "24 Sep 2026",
      lastReturnDate: "24 Sep 2026",
      expectedDate: "03 Oct 2026",
      status: "Completed",
      notes: "Full ultrasonic NDT testing approved.",
    },
  ];

  const [orders, setOrders] = useState(initialCromeOrders);
  const [showModal, setShowModal] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [viewOrder, setViewOrder] = useState(null);
  const [deleteConfirmOrder, setDeleteConfirmOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Status Modal Drawer state
  const [statusModalOrder, setStatusModalOrder] = useState(null);
  const [openStatusDropdownOrderId, setOpenStatusDropdownOrderId] = useState(null);
  const [expandedReturns, setExpandedReturns] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    id: "",
    product: "",
    subcontractor: "Apex Chrome Works",
    quantity: "",
    platingType: "Hard Chrome (25 Micron)",
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
      id: `CR-${Math.floor(120 + Math.random() * 900)}`,
      product: "",
      subcontractor: "Apex Chrome Works",
      quantity: "",
      platingType: "Hard Chrome (25 Micron)",
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      expectedDate: "",
      status: "In Process",
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
      platingType: order.platingType || "Hard Chrome (25 Micron)",
      date: order.date || "",
      expectedDate: order.expectedDate || "",
      status: order.status || "In Process",
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
      order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="crome-page glass-theme">
      <div className="crome-container">

        {/* HEADER */}
        <section className="crome-header" data-aos="fade-up">
          <div>
            <h1>Crome Management</h1>
            <p>Track and monitor all crome plating and finishing orders.</p>
          </div>

          <div className="crome-header-actions">
            <button
              className="crome-download-btn"
              onClick={() => alert("Downloading Crome Orders Report (PDF/Excel)...")}
            >
              <FiDownload />
              Download Report
            </button>

            <button
              className="sc-primary-button"
              onClick={handleOpenCreate}
            >
              <FiPlus />
              Create Crome Order
            </button>
          </div>
        </section>

        {/* STATS (EXACT 3D GLASS STYLE FROM SUBCONTRACTING) */}
        <section className="sc-stats crome-stats">
          <div className="sc-stat">
            <div className="sc-stat-icon blue">
              <FiPackage />
            </div>
            <div>
              <strong>{orders.length}</strong>
              <span>Total Cromes</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon orange">
              <FiClock />
            </div>
            <div>
              <strong>{orders.filter((o) => o.status === "Pending").length}</strong>
              <span>Pending</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon">
              <FiLayers />
            </div>
            <div>
              <strong>{orders.filter((o) => o.status === "In Process").length}</strong>
              <span>In Process</span>
            </div>
          </div>

          <div className="sc-stat">
            <div className="sc-stat-icon green">
              <FiCheckCircle />
            </div>
            <div>
              <strong>{orders.filter((o) => o.status === "Completed").length}</strong>
              <span>Completed</span>
            </div>
          </div>
        </section>

        {/* MAIN CARD (EXACT SUBCONTRACTING GLASS CARD) */}
        <section className="subcontracting-card crome-card" data-aos="fade-up">

          {/* TOOLBAR */}
          <div className="sc-toolbar">
            <div className="sc-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search crome orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="sc-actions">
              <div
                className="crome-dropdown"
                tabIndex="0"
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                <div
                  className="crome-dropdown-selected"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {statusFilter === "All" ? "All Status" : statusFilter}
                  <FiChevronDown style={{ marginLeft: "10px" }} />
                </div>
                {isDropdownOpen && (
                  <div className="crome-dropdown-options">
                    {["All", "In Process", "Pending", "Completed"].map((s) => (
                      <div
                        key={s}
                        className="crome-dropdown-option"
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
                  <th>Product / Part</th>
                  <th>Plating Vendor</th>
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
                      <strong className="order-id">{order.id}</strong>
                    </td>

                    <td>
                      <span className="product-name">{order.product}</span>
                    </td>

                    <td>
                      <span className="subcontractor-name">{order.subcontractor}</span>
                    </td>

                    <td>{order.quantity}</td>

                    <td>
                      <span className="date-text">{order.date}</span>
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
                          title="View Crome Details"
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
              <div className="empty-orders">No crome orders found.</div>
            )}
          </div>

          {/* FOOTER & PAGINATION */}
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

      {/* CREATE / EDIT CROME ORDER MODAL (LIKE CREATE ORDER) */}
      {showModal && (
        <div
          className="sc-modal-overlay"
          onClick={() => {
            setShowModal(false);
            setEditingOrder(null);
          }}
        >
          <div className="sc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span>{editingOrder ? "EDIT CROME ORDER" : "NEW CROME ORDER"}</span>
                <h2>
                  {editingOrder
                    ? `Edit Order ${editingOrder.id}`
                    : "Create Crome Order"}
                </h2>
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
                  <label>Product / Component Name *</label>
                  <input
                    type="text"
                    placeholder="Enter product or component name"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Plating Vendor</label>
                    <select
                      value={formData.subcontractor}
                      onChange={(e) =>
                        setFormData({ ...formData, subcontractor: e.target.value })
                      }
                    >
                      <option value="Apex Chrome Works">Apex Chrome Works</option>
                      <option value="Gujarat Plating Ltd">Gujarat Plating Ltd</option>
                      <option value="Shree Surface Tech">Shree Surface Tech</option>
                      <option value="Modern Chrome Finishes">Modern Chrome Finishes</option>
                      <option value="Super Electroplaters">Super Electroplaters</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g. 650 Pc"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Plating Type & Thickness</label>
                    <input
                      type="text"
                      placeholder="e.g. Hard Chrome (25-30 Micron)"
                      value={formData.platingType}
                      onChange={(e) =>
                        setFormData({ ...formData, platingType: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="In Process">In Process</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Order Date</label>
                    <input
                      type="text"
                      placeholder="e.g. 08 Oct 2026"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Expected Return Date</label>
                    <input
                      type="text"
                      placeholder="e.g. 16 Oct 2026"
                      value={formData.expectedDate}
                      onChange={(e) =>
                        setFormData({ ...formData, expectedDate: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Technical Specifications & Notes</label>
                  <textarea
                    rows="4"
                    placeholder="Add plating bath specifications, micron tolerance, notes..."
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
                    setEditingOrder(null);
                  }}
                >
                  Cancel
                </button>

                <button type="submit" className="save-button">
                  {editingOrder ? "Save Changes" : "Create Crome Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW ORDER DETAILS DRAWER */}
      {viewOrder && (
        <div className="sc-modal-overlay" onClick={() => setViewOrder(null)}>
          <div className="sc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span>CROME ORDER DETAILS</span>
                <h2>{viewOrder.id}</h2>
              </div>

              <button type="button" onClick={() => setViewOrder(null)}>
                <FiX />
              </button>
            </div>

            <div className="modal-body">
              <div className="detail-item-card">
                <div className="detail-item-label">Product / Component</div>
                <div className="detail-item-value">{viewOrder.product}</div>
              </div>

              <div className="detail-grid-2">
                <div className="detail-item-card">
                  <div className="detail-item-label">Plating Vendor</div>
                  <div className="detail-item-value">{viewOrder.subcontractor}</div>
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

              <div className="detail-grid-2">
                <div className="detail-item-card">
                  <div className="detail-item-label">Quantity</div>
                  <div className="detail-item-value">{viewOrder.quantity}</div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Plating Spec</div>
                  <div className="detail-item-value">
                    {viewOrder.platingType || "Hard Chrome (25 Micron)"}
                  </div>
                </div>
              </div>

              <div className="detail-grid-2">
                <div className="detail-item-card">
                  <div className="detail-item-label">Order Date</div>
                  <div className="detail-item-value">{viewOrder.date}</div>
                </div>

                <div className="detail-item-card">
                  <div className="detail-item-label">Expected Return</div>
                  <div className="detail-item-value">
                    {viewOrder.expectedDate || "16 Oct 2026"}
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
                  {viewOrder.notes || "No additional notes provided."}
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

      {/* STATUS & PROCESS DRAWER MODAL (LIKE SUBCONTRACTING) */}
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
                <span>CROME PROCESS & STATUS</span>
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
                      {statusModalOrder.partyCode || "CP-1"} • {statusModalOrder.subcontractor}
                    </span>
                  </div>

                  <div className="order-card-center-code">
                    {statusModalOrder.itemCode || "CH-2"}
                  </div>

                  <div className="order-card-dates">
                    <div>Order Date : {statusModalOrder.date || "08 Oct 2026"}</div>
                    <div>
                      Last Return :{" "}
                      {statusModalOrder.lastReturnDate ||
                        statusModalOrder.expectedDate ||
                        "16 Oct 2026"}
                    </div>
                  </div>
                </div>

                {/* TWO DETAILS BOXES */}
                <div className="order-card-details-grid">
                  {/* SENT DETAILS */}
                  <div className="order-sent-box">
                    <div className="order-box-header">SENT FOR CHROMING</div>
                    <div className="order-box-row">
                      <span>Sent Stock</span>
                      <strong>{statusModalOrder.sentStock || "180.000 KG"}</strong>
                    </div>
                    <div className="order-box-row">
                      <span>Total Pieces</span>
                      <strong>{statusModalOrder.quantity || "650 Pc"}</strong>
                    </div>
                    <div className="order-box-divider"></div>
                    <div className="order-box-total-row">
                      <span className="order-box-total-label">Total Value</span>
                      <div className="order-box-total-val-wrap">
                        <div className="order-box-total-val">
                          {statusModalOrder.totalValue || "₹1,45,000"}
                        </div>
                        <div className="order-box-total-sub">
                          {statusModalOrder.unitRate || "(₹750/unit + ₹45/job)"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RETURN DETAILS */}
                  <div className="order-return-box">
                    <div className="order-return-header">
                      <span className="order-return-title">
                        RETURN DETAILS ({statusModalOrder.returnDetailsCount || 2})
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
                          <span>Passed Q.C.</span>
                        </div>
                        <div className="order-return-item-line">
                          <span>Batch 2 (80.000 KG)</span>
                          <span>Passed Q.C.</span>
                        </div>
                      </div>
                    )}

                    <div className="order-return-divider"></div>
                    <div className="order-return-row">
                      <span>Total Net Return</span>
                      <strong>{statusModalOrder.returnStock || "180.000 KG"}</strong>
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
                          `Chrome Return Record logged for order ${
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

            <h3>Delete Crome Order?</h3>

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

export default Crome;