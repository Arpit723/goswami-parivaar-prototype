/* ============================================================
   Goswami Parivaar — Prototype navigation layer
   Included by every screen. Wires "hotspots" (buttons, rows,
   tiles, chips, back arrows) to target screens via one central
   map — like a Figma prototype's connection list.
   Also notifies the parent presentation shell (prototype.html).
   ============================================================ */
(function () {
  "use strict";

  var file = location.pathname.split("/").pop();

  var NAV = {
    /* ---------- Phase 1 ---------- */
    "gp-001-splash.html": {
      anywhere: "gp-003-login.html"
    },
    "gp-002-onboarding.html": {
      btn: {
        "Continue": "gp-003-login.html",
        "Skip": "gp-003-login.html",
        "Create account": "gp-006-registration-step1.html",
        "Sign in": "gp-003-login.html"
      }
    },
    "gp-003-login.html": {
      btn: {
        "Log in": "gp-009-home.html",
        "Forgot password?": "gp-005-forgot-password.html",
        "Create account": "gp-006-registration-step1.html",
        "Google": "gp-009-home.html",
        "Apple": "gp-009-home.html"
      }
    },
    "gp-004-otp.html": {
      back: "gp-003-login.html",
      btn: {
        "Verify": "gp-009-home.html",
        "Wrong number? Change it": "gp-003-login.html"
      }
    },
    "gp-005-forgot-password.html": {
      back: "gp-003-login.html",
      btn: {
        "Send reset code": "gp-004-otp.html",
        "Enter code": "gp-004-otp.html",
        "Save password": "gp-003-login.html"
      }
    },
    "gp-006-registration-step1.html": {
      back: "gp-003-login.html",
      btn: { "Continue": "gp-007-registration-step2.html" }
    },
    "gp-007-registration-step2.html": {
      back: "gp-006-registration-step1.html",
      btn: { "Submit application": "gp-008-status-screens.html" }
    },
    "gp-008-status-screens.html": {
      btn: { "Update & resubmit": "gp-007-registration-step2.html" }
    },
    "gp-009-home.html": {
      btn: {
        "Register": "gp-031-event-detail.html",
        "Read in Inbox": "gp-010-inbox.html",
        "See all": "gp-030-events-browse.html"
      },
      tile: {
        "Jobs": "gp-020-jobs-browse.html",
        "Marketplace": "placeholder-marketplace.html",
        "Matrimony": "placeholder-matrimony.html",
        "Events": "gp-030-events-browse.html"
      },
      sel: { ".homehead .iconbtn": "gp-010-inbox.html" }
    },
    "gp-010-inbox.html": {},
    "gp-011-inbox-detail.html": {
      back: "gp-010-inbox.html",
      btn: {
        "Register": "gp-031-event-detail.html",
        "Block user": "gp-015-blocked-users.html"
      }
    },
    "gp-012-profile.html": {
      li: {
        "My job posts & applications": "gp-023-my-jobs.html",
        "My shop": "placeholder-marketplace.html",
        "Matrimony profile": "placeholder-matrimony.html",
        "My event registrations": "gp-033-my-registrations.html"
      }
    },
    "gp-013-edit-profile.html": {
      back: "gp-012-profile.html",
      btn: {
        "Save": "gp-012-profile.html",
        "Save changes": "gp-012-profile.html"
      }
    },
    "gp-014-settings.html": {
      li: {
        "Edit profile": "gp-013-edit-profile.html",
        "Blocked users": "gp-015-blocked-users.html",
        "Delete account": "gp-016-delete-account.html"
      },
      btn: { "Log out": "gp-003-login.html" }
    },
    "gp-015-blocked-users.html": {
      back: "gp-014-settings.html"
    },
    "gp-016-delete-account.html": {
      back: "gp-014-settings.html",
      btn: {
        "Keep my account": "gp-014-settings.html",
        "Cancel": "gp-014-settings.html",
        "Keep my account — sign me back in": "gp-003-login.html"
      }
    },

    /* ---------- Phase 2 · Jobs ---------- */
    "gp-020-jobs-browse.html": {
      back: "gp-009-home.html",
      li: {
        "Field Sales Executive": "gp-021-job-detail.html",
        "Junior Accountant": "gp-021-job-detail.html",
        "Pharma Production Supervisor": "gp-021-job-detail.html",
        "React Native Intern": "gp-021-job-detail.html",
        "Delivery Partner (Part-time)": "gp-021-job-detail.html"
      },
      chip: {
        "My Jobs": "gp-023-my-jobs.html",
        "Post a Job": "gp-022-post-job.html",
        "Seeker": "gp-026-seeker-profile.html"
      }
    },
    "gp-021-job-detail.html": {
      back: "gp-020-jobs-browse.html",
      btn: { "Apply with profile": "gp-027-apply-flow.html" }
    },
    "gp-022-post-job.html": {
      back: "gp-020-jobs-browse.html",
      btn: { "Submit for approval": "gp-023-my-jobs.html" }
    },
    "gp-023-my-jobs.html": {
      back: "gp-020-jobs-browse.html",
      li: { "Field Sales Executive": "gp-024-applicants.html" },
      chip: {
        "Browse": "gp-020-jobs-browse.html",
        "Post a Job": "gp-022-post-job.html",
        "Seeker": "gp-026-seeker-profile.html"
      },
      btn: { "Post a Job": "gp-022-post-job.html" }
    },
    "gp-024-applicants.html": {
      back: "gp-023-my-jobs.html",
      li: {
        "Kunal Goswami": "gp-025-applicant-detail.html",
        "Meera Trivedi": "gp-025-applicant-detail.html",
        "Harsh Vyas": "gp-025-applicant-detail.html",
        "Dipak Joshi": "gp-025-applicant-detail.html"
      }
    },
    "gp-025-applicant-detail.html": {
      back: "gp-024-applicants.html",
      btn: {
        "Shortlist": "gp-024-applicants.html",
        "Reject": "gp-024-applicants.html"
      }
    },
    "gp-026-seeker-profile.html": {
      back: "gp-020-jobs-browse.html",
      chip: {
        "Browse": "gp-020-jobs-browse.html",
        "My Jobs": "gp-023-my-jobs.html",
        "Post a Job": "gp-022-post-job.html"
      }
    },
    "gp-027-apply-flow.html": {
      back: "gp-021-job-detail.html",
      btn: {
        "Submit application": "gp-028-my-applications.html",
        "Track my application": "gp-028-my-applications.html",
        "Back to jobs": "gp-020-jobs-browse.html"
      }
    },
    "gp-028-my-applications.html": {
      back: "gp-026-seeker-profile.html"
    },

    /* ---------- Phase 2 · Events ---------- */
    "gp-030-events-browse.html": {
      back: "gp-009-home.html",
      sel: {
        ".stack .card:nth-child(1)": "gp-031-event-detail.html",
        ".stack .card:nth-child(2)": "gp-031-event-detail.html",
        ".stack .card:nth-child(3)": "gp-031-event-detail.html",
        ".stack .card:nth-child(4)": "gp-031-event-detail.html"
      },
      chip: {
        "My Registrations": "gp-033-my-registrations.html",
        "Create": "gp-032-create-event.html"
      },
      btn: { "Create event": "gp-032-create-event.html" }
    },
    "gp-031-event-detail.html": {
      back: "gp-030-events-browse.html",
      btn: {
        "Register": "gp-033-my-registrations.html",
        "Join waitlist": "gp-033-my-registrations.html",
        "Unregister": "gp-030-events-browse.html"
      }
    },
    "gp-032-create-event.html": {
      back: "gp-030-events-browse.html",
      btn: { "Submit for approval": "gp-033-my-registrations.html" }
    },
    "gp-033-my-registrations.html": {
      back: "gp-030-events-browse.html",
      li: {
        "Investment Planning": "gp-031-event-detail.html",
        "Career Guidance": "gp-031-event-detail.html",
        "Parivaar Milan Samaroh": "gp-031-event-detail.html"
      },
      chip: {
        "Upcoming": "gp-030-events-browse.html",
        "Create": "gp-032-create-event.html"
      },
      btn: { "Attendees": "gp-034-attendees.html" }
    },
    "gp-034-attendees.html": {
      back: "gp-033-my-registrations.html"
    },

    /* ---------- Module placeholders (Phases 3–4) ---------- */
    "placeholder-marketplace.html": { back: "gp-009-home.html" },
    "placeholder-matrimony.html": { back: "gp-009-home.html" }
  };

  var rules = NAV[file] || {};

  function norm(s) { return (s || "").replace(/\s+/g, " ").trim(); }

  // 1. Back arrow: first icon button in the app bar
  if (rules.back) {
    var b = document.querySelector(".appbar .iconbtn");
    if (b) b.setAttribute("data-goto", rules.back);
  }

  // 2. Buttons & text links matched by exact text
  if (rules.btn) {
    var els = document.querySelectorAll("a, button");
    Array.prototype.forEach.call(els, function (el) {
      var t = norm(el.textContent);
      if (rules.btn.hasOwnProperty(t)) el.setAttribute("data-goto", rules.btn[t]);
    });
  }

  // 3. Chips (module tabs, filter chips) matched by exact text
  if (rules.chip) {
    var chips = document.querySelectorAll(".chip");
    Array.prototype.forEach.call(chips, function (el) {
      var t = norm(el.textContent);
      if (rules.chip.hasOwnProperty(t)) el.setAttribute("data-goto", rules.chip[t]);
    });
  }

  // 4. List rows matched by their title
  if (rules.li) {
    var titles = document.querySelectorAll(".li .lt");
    Array.prototype.forEach.call(titles, function (t) {
      var key = norm(t.textContent);
      if (rules.li.hasOwnProperty(key)) {
        var row = t.closest(".li");
        if (row) row.setAttribute("data-goto", rules.li[key]);
      }
    });
  }

  // 5. Home tiles matched by their title
  if (rules.tile) {
    var tt = document.querySelectorAll(".tile .ttitle");
    Array.prototype.forEach.call(tt, function (t) {
      var key = norm(t.textContent);
      if (rules.tile.hasOwnProperty(key)) {
        var tile = t.closest(".tile");
        if (tile) tile.setAttribute("data-goto", rules.tile[key]);
      }
    });
  }

  // 6. Arbitrary selectors
  if (rules.sel) {
    Object.keys(rules.sel).forEach(function (s) {
      var found = document.querySelectorAll(s);
      Array.prototype.forEach.call(found, function (el) {
        el.setAttribute("data-goto", rules.sel[s]);
      });
    });
  }

  // Click handling: data-goto wins over any href
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-goto]") : null;
    if (el) { e.preventDefault(); location.href = el.getAttribute("data-goto"); return; }
    if (rules.anywhere && !e.target.closest("a[href]")) {
      e.preventDefault(); location.href = rules.anywhere;
    }
  }, true);

  // Tap affordance
  var st = document.createElement("style");
  st.textContent = "[data-goto]{cursor:pointer}";
  document.head.appendChild(st);

  // Tell the presentation shell which screen is showing
  try {
    parent.postMessage({ type: "gp-proto", file: file, title: document.title }, "*");
  } catch (err) { /* standalone view */ }
})();
