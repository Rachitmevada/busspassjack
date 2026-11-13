const asset = (name: string) => `/assets/${name}`;

const icons = {
  profile: asset("3d679.png"),
  attendance: asset("56c38.png"),
  fees: asset("bffc3.png"),
  timetable: asset("fc724.png"),
  lms: asset("e6a7a.png"),
  other: asset("0376d.png"),
  announcement: asset("01335.png"),
  transport: asset("9030a.png"),
  assessment: asset("c3483.png"),
  results: asset("c3483.png"),
  feedback: asset("29b23.png"),
  leave: asset("2153a.png"),
  hostel: asset("c63ae.png"),
  event: asset("67d76.png"),
  lmsBackground: asset("607d5.png"),
  menu: asset("f945b.svg"),
  chevron: asset("00cb5.svg"),
  attendanceBar: asset("96e60.svg"),
  pay: asset("c8ab1.svg"),
  deadline: asset("a124a.svg"),
};

const courses = [
  "Discrete\nMathematics",
  "Indian\nConstitution",
  "Object Oriented\nProgramming\nwith Java",
];

const utilities = [
  { label: "Announcement", icon: icons.announcement },
  { label: "Transport", icon: icons.transport, transportLink: true },
  { label: "Internal Asses..", icon: icons.assessment },
  { label: "Results", icon: icons.results },
  { label: "Transport", icon: icons.feedback },
  { label: "Hostel Leave", icon: icons.leave },
  { label: "Hostel", icon: icons.hostel },
  { label: "Event Regist...", icon: icons.event },
];

function Header() {
  return (
    <header className="app-header">
      <img className="profile-photo" src={icons.profile} alt="Rachit Mevada" />
      <div className="student-info">
        <p className="student-name">HI, MEVADA RACHIT JITENDRA...</p>
        <p className="student-meta">111 D2D-1 | Roll No. 47 | Batch A2</p>
      </div>
      <div className="menu-icon" aria-hidden="true">
        <img src={icons.menu} alt="" />
      </div>
    </header>
  );
}

function SectionTitle({ icon, title, detail }: { icon: string; title: string; detail?: string }) {
  return (
    <div className="section-title">
      <span className="section-title__label">
        <img className="section-title__icon" src={icon} alt="" />
        <span>{title}</span>
        {detail && <span className="semester-detail">{detail}</span>}
      </span>
      <img className="section-title__chevron" src={icons.chevron} alt="" />
    </div>
  );
}

function TransportPage() {
  return (
    <main className="app-shell transport-page">
      <Header />
      <section className="transport-page__content">
        <div className="transport-page__title">
          <img src={icons.transport} alt="" />
          <h1>Transport</h1>
        </div>
        <div className="transport-page__card">
          <img src={icons.transport} alt="" />
          <div>
            <h2>Transport Section</h2>
            <p>Your transport information will appear here.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="app-shell">
      <Header />

      <div className="dashboard">
        <section>
          <SectionTitle icon={icons.attendance} title="Attendance" />
          <div className="attendance-card">
            <div className="semester-box semester-box--teal">
              <span>Semester</span>
              <strong>3</strong>
            </div>
            <div className="attendance-details">
              <p>
                <span>A.Y.</span>
                <strong>2026-27 -Odd</strong>
              </p>
              <div className="attendance-progress">
                <img src={icons.attendanceBar} alt="Attendance: 90.24 percent" />
                <strong>90.24%</strong>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle icon={icons.fees} title="Pending Fees" />
          <div className="fees-card">
            <div className="semester-box semester-box--red">
              <span>Semester</span>
              <strong>3</strong>
            </div>
            <div className="fee-details">
              <strong className="fee-amount">₹ 2,000</strong>
              <span className="fee-deadline">
                <img src={icons.deadline} alt="" />
                07-07-2026 12:00 AM
              </span>
            </div>
            <div className="pay-button">
              <img src={icons.pay} alt="" />
              Pay
            </div>
          </div>
        </section>

        <section>
          <SectionTitle icon={icons.timetable} title="Time Table" />
          <div className="timetable-card">
            <div className="timetable-head">
              <div className="timetable-date">04/11</div>
              <div className="timetable-head-fill" />
            </div>
            <div className="timetable-empty">No Time Table</div>
          </div>
        </section>

        <section>
          <SectionTitle icon={icons.lms} title="LMS" detail="Sem - 3" />
          <div className="course-list">
            {courses.map((course) => (
              <div
                className="course-card"
                style={{ backgroundImage: `url(${icons.lmsBackground})` }}
                key={course}
              >
                {course.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle icon={icons.other} title="Other" />
          <div className="utility-grid">
            {utilities.map((item, index) => (
              <div className="utility-item" key={`${item.label}-${index}`}>
                {item.transportLink ? (
                  <a className="transport-link" href="/transport" aria-label="Open Transport">
                    <img src={item.icon} alt="Transport" />
                  </a>
                ) : (
                  <img src={item.icon} alt="" />
                )}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <p className="app-version">App Version: 3.0.5</p>
      </div>
    </main>
  );
}

function App() {
  return window.location.pathname === "/transport" ? <TransportPage /> : <Dashboard />;
}

export default App;
