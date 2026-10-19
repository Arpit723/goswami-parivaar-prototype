/* ============================================================
   Goswami Parivaar — Prototype navigation layer
   Central hotspot map for all screens (Phases 1–5).
   Also: clean mode (#clean) + presentation-shell updates.
   ============================================================ */
(function () {
  "use strict";

  var file = location.pathname.split("/").pop();

  var NAV = {
    /* ---------- Phase 1 · Core & identity ---------- */
    "gp-001-splash.html": { anywhere: "gp-003-login.html" },
    "gp-002-onboarding.html": { btn: {
      "Continue": "gp-003-login.html", "Skip": "gp-003-login.html",
      "Create account": "gp-006-registration-step1.html", "Sign in": "gp-003-login.html" } },
    "gp-003-login.html": { btn: {
      "Log in": "gp-009-home.html", "Forgot password?": "gp-005-forgot-password.html",
      "Create account": "gp-006-registration-step1.html",
      "Google": "gp-009-home.html", "Apple": "gp-009-home.html" } },
    "gp-004-otp.html": { back: "gp-003-login.html", btn: {
      "Verify": "gp-009-home.html", "Wrong number? Change it": "gp-003-login.html" } },
    "gp-005-forgot-password.html": { back: "gp-003-login.html", btn: {
      "Send reset code": "gp-004-otp.html", "Enter code": "gp-004-otp.html",
      "Save password": "gp-003-login.html" } },
    "gp-006-registration-step1.html": { back: "gp-003-login.html", btn: {
      "Continue": "gp-007-registration-step2.html" } },
    "gp-007-registration-step2.html": { back: "gp-006-registration-step1.html", btn: {
      "Submit application": "gp-008-status-screens.html" } },
    "gp-008-status-screens.html": { btn: {
      "Update & resubmit": "gp-007-registration-step2.html" } },
    "gp-009-home.html": {
      btn: { "Register": "gp-031-event-detail.html", "Read in Inbox": "gp-010-inbox.html", "See all": "gp-030-events-browse.html" },
      tile: { "Jobs": "gp-020-jobs-browse.html", "Marketplace": "mp-010-marketplace-home.html",
              "Matrimony": "gp-053-matrimony-browse.html", "Events": "gp-030-events-browse.html" },
      sel: { ".homehead .iconbtn": "gp-010-inbox.html" } },
    "gp-010-inbox.html": {},
    "gp-011-inbox-detail.html": { back: "gp-010-inbox.html", btn: {
      "Register": "gp-031-event-detail.html", "Block user": "gp-015-blocked-users.html" } },
    "gp-012-profile.html": { li: {
      "My job posts & applications": "gp-023-my-jobs.html",
      "My shop": "mp-020-catalog-manager.html",
      "Matrimony profile": "gp-054-matrimony-profile-detail.html",
      "My event registrations": "gp-033-my-registrations.html" } },
    "gp-013-edit-profile.html": { back: "gp-012-profile.html", btn: {
      "Save": "gp-012-profile.html", "Save changes": "gp-012-profile.html" } },
    "gp-014-settings.html": { li: {
      "Edit profile": "gp-013-edit-profile.html", "Blocked users": "gp-015-blocked-users.html",
      "Delete account": "gp-016-delete-account.html" },
      btn: { "Log out": "gp-003-login.html" } },
    "gp-015-blocked-users.html": { back: "gp-014-settings.html" },
    "gp-016-delete-account.html": { back: "gp-014-settings.html", btn: {
      "Keep my account": "gp-014-settings.html", "Cancel": "gp-014-settings.html",
      "Keep my account — sign me back in": "gp-003-login.html" } },

    /* ---------- Phase 2 · Jobs ---------- */
    "gp-020-jobs-browse.html": { back: "gp-009-home.html",
      li: { "Field Sales Executive": "gp-021-job-detail.html", "Junior Accountant": "gp-021-job-detail.html",
            "Pharma Production Supervisor": "gp-021-job-detail.html", "React Native Intern": "gp-021-job-detail.html",
            "Delivery Partner (Part-time)": "gp-021-job-detail.html" },
      chip: { "My Jobs": "gp-023-my-jobs.html", "Post a Job": "gp-022-post-job.html", "Seeker": "gp-026-seeker-profile.html" } },
    "gp-021-job-detail.html": { back: "gp-020-jobs-browse.html", btn: {
      "Apply with profile": "gp-027-apply-flow.html" } },
    "gp-022-post-job.html": { back: "gp-020-jobs-browse.html", btn: {
      "Submit for approval": "gp-023-my-jobs.html" } },
    "gp-023-my-jobs.html": { back: "gp-020-jobs-browse.html",
      li: { "Field Sales Executive": "gp-024-applicants.html" },
      chip: { "Browse": "gp-020-jobs-browse.html", "Post a Job": "gp-022-post-job.html", "Seeker": "gp-026-seeker-profile.html" },
      btn: { "Post a Job": "gp-022-post-job.html" } },
    "gp-024-applicants.html": { back: "gp-023-my-jobs.html",
      li: { "Kunal Goswami": "gp-025-applicant-detail.html", "Meera Trivedi": "gp-025-applicant-detail.html",
            "Harsh Vyas": "gp-025-applicant-detail.html", "Dipak Joshi": "gp-025-applicant-detail.html" } },
    "gp-025-applicant-detail.html": { back: "gp-024-applicants.html", btn: {
      "Shortlist": "gp-024-applicants.html", "Reject": "gp-024-applicants.html" } },
    "gp-026-seeker-profile.html": { back: "gp-020-jobs-browse.html",
      chip: { "Browse": "gp-020-jobs-browse.html", "My Jobs": "gp-023-my-jobs.html", "Post a Job": "gp-022-post-job.html" } },
    "gp-027-apply-flow.html": { back: "gp-021-job-detail.html", btn: {
      "Submit application": "gp-028-my-applications.html", "Track my application": "gp-028-my-applications.html",
      "Back to jobs": "gp-020-jobs-browse.html" } },
    "gp-028-my-applications.html": { back: "gp-026-seeker-profile.html" },

    /* ---------- Phase 2 · Events ---------- */
    "gp-030-events-browse.html": { back: "gp-009-home.html",
      sel: { ".stack .card:nth-child(1)": "gp-031-event-detail.html", ".stack .card:nth-child(2)": "gp-031-event-detail.html",
             ".stack .card:nth-child(3)": "gp-031-event-detail.html", ".stack .card:nth-child(4)": "gp-031-event-detail.html" },
      chip: { "My Registrations": "gp-033-my-registrations.html", "Create": "gp-032-create-event.html" },
      btn: { "Create event": "gp-032-create-event.html" } },
    "gp-031-event-detail.html": { back: "gp-030-events-browse.html", btn: {
      "Register": "gp-033-my-registrations.html", "Join waitlist": "gp-033-my-registrations.html",
      "Unregister": "gp-030-events-browse.html" } },
    "gp-032-create-event.html": { back: "gp-030-events-browse.html", btn: {
      "Submit for approval": "gp-033-my-registrations.html" } },
    "gp-033-my-registrations.html": { back: "gp-030-events-browse.html",
      li: { "Investment Planning": "gp-031-event-detail.html", "Career Guidance": "gp-031-event-detail.html",
            "Parivaar Milan Samaroh": "gp-031-event-detail.html" },
      chip: { "Upcoming": "gp-030-events-browse.html", "Create": "gp-032-create-event.html" },
      btn: { "Attendees": "gp-034-attendees.html" } },
    "gp-034-attendees.html": { back: "gp-033-my-registrations.html" },

    /* ---------- Marketplace (business-linked, re-scoped 15 Oct) ---------- */
    "mp-010-marketplace-home.html": { back: "gp-009-home.html",
      sel: { ".catcard": "mp-011-product-list.html", ".hcard": "mp-012-product-detail.html" },
      btn: { "sign in": "gp-003-login.html", "Sign in / Create account": "gp-003-login.html", "See all": "mp-011-product-list.html" } },
    "mp-011-product-list.html": { back: "mp-010-marketplace-home.html",
      sel: { ".pcard": "mp-012-product-detail.html" },
      btn: { "Browse": "mp-011-product-list.html" } },
    "mp-012-product-detail.html": { back: "mp-011-product-list.html",
      sel: { ".pill.warn": "mp-030-product-reviews.html" } },
    "mp-090-edge-states.html": { back: "mp-012-product-detail.html" },
    "mp-031-review-moderation.html": { back: "mp-030-product-reviews.html",
      btn: { "Edit my review": "mp-030-product-reviews.html" } },
    "mp-030-product-reviews.html": { back: "mp-012-product-detail.html",
      btn: { "Write a review": "mp-030-product-reviews.html", "Submit for approval": "mp-012-product-detail.html",
             "Cancel": "mp-030-product-reviews.html", "Edit": "mp-030-product-reviews.html" } },
    "mp-020-catalog-manager.html": { back: "gp-009-home.html",
      li: { "Brass Diya Set": "mp-021-product-editor.html", "Wooden Bead Toran": "mp-021-product-editor.html",
            "Copper Pooja Thali": "mp-021-product-editor.html", "Embroidered Clutch": "mp-021-product-editor.html" },
      btn: { "+ Add": "mp-021-product-editor.html", "+ Add product": "mp-021-product-editor.html" } },
    "mp-021-product-editor.html": { back: "mp-020-catalog-manager.html",
      btn: { "Submit for approval": "mp-020-catalog-manager.html" } },

    /* ---------- Services (MP-050..053): PARKED 19 Oct — screens unwired, files kept ---------- */

    /* ---------- Marketplace · Cart & Orders (MP-070..073, 19 Oct — payment-agnostic) ---------- */
    "mp-070-cart.html": { back: "mp-011-product-list.html",
      btn: { "Place order · 2 sellers": "mp-071-place-order.html", "Browse products": "mp-010-marketplace-home.html" } },
    "mp-071-place-order.html": { back: "mp-070-cart.html",
      btn: { "Submit orders": "mp-072-my-orders.html", "Track my orders": "mp-072-my-orders.html" } },
    "mp-072-my-orders.html": { back: "mp-010-marketplace-home.html",
      btn: { "Cancel order": "mp-072-my-orders.html" } },
    "mp-073-seller-orders.html": { back: "mp-020-catalog-manager.html",
      btn: { "Accept order": "mp-073-seller-orders.html", "Decline…": "mp-073-seller-orders.html",
             "Send decline": "mp-073-seller-orders.html", "Keep order": "mp-073-seller-orders.html" } },

    /* ---------- Marketplace · Admin console (MP-060..062, 19 Oct — in-app, role-gated) ---------- */
    "mp-060-admin-dashboard.html": { back: "gp-009-home.html",
      li: { "Listing approvals": "mp-061-approval-queue.html", "Reported reviews": "mp-031-review-moderation.html",
            "Categories": "mp-062-categories-manager.html" } },
    "mp-061-approval-queue.html": { back: "mp-060-admin-dashboard.html",
      btn: { "Approve": "mp-061-approval-queue.html", "Request change": "mp-061-approval-queue.html",
             "Hold": "mp-061-approval-queue.html", "Send note": "mp-061-approval-queue.html",
             "Cancel": "mp-061-approval-queue.html" } },
    "mp-062-categories-manager.html": { back: "mp-060-admin-dashboard.html",
      btn: { "+ Add": "mp-062-categories-manager.html", "Add — live instantly": "mp-062-categories-manager.html",
             "Cancel": "mp-062-categories-manager.html" } },

    /* ---------- Phase 4 · Matrimony & calls ---------- */
    "gp-050-matrimony-intro.html": { back: "gp-009-home.html", btn: {
      "Begin — create my profile": "gp-051-matrimony-profile-setup.html",
      "Creating for a family member? Start a managed profile": "gp-060-family-managed.html",
      "Not now": "gp-009-home.html" } },
    "gp-051-matrimony-profile-setup.html": { back: "gp-050-matrimony-intro.html", btn: {
      "Continue": "gp-052-selfie-capture.html", "Back": "gp-050-matrimony-intro.html" } },
    "gp-052-selfie-capture.html": { back: "gp-051-matrimony-profile-setup.html", btn: {
      "Back to Home": "gp-009-home.html", "Try again (2 of 3)": "gp-053-matrimony-browse.html" } },
    "gp-053-matrimony-browse.html": { back: "gp-009-home.html",
      sel: { ".stack .card:nth-child(1)": "gp-054-matrimony-profile-detail.html",
             ".stack .card:nth-child(2)": "gp-054-matrimony-profile-detail.html",
             ".stack .card:nth-child(3)": "gp-054-matrimony-profile-detail.html" },
      chip: { "Interests": "gp-055-interests.html", "My Profile": "gp-058-visibility.html" } },
    "gp-054-matrimony-profile-detail.html": { back: "gp-053-matrimony-browse.html", btn: {
      "Mark Interested": "gp-055-interests.html",
      "Block": "gp-059-block-report.html", "Block Deepali instead": "gp-059-block-report.html" } },
    "gp-055-interests.html": { back: "gp-053-matrimony-browse.html", btn: {
      "Message": "gp-057-messages.html", "Call": "gp-061-call.html", "Share contact": "gp-056-contact-sharing.html",
      "Accept": "gp-055-interests.html", "Withdraw": "gp-055-interests.html" } },
    "gp-056-contact-sharing.html": { back: "gp-055-interests.html", btn: {
      "Request contact sharing": "gp-056-contact-sharing.html", "Done": "gp-055-interests.html" } },
    "gp-057-messages.html": { back: "gp-055-interests.html", btn: {
      "Send for approval": "gp-055-interests.html", "Edit & resend": "gp-055-interests.html" } },
    "gp-058-visibility.html": { back: "gp-053-matrimony-browse.html" },
    "gp-059-block-report.html": { back: "gp-054-matrimony-profile-detail.html", btn: {
      "Submit report": "gp-009-home.html", "Block Deepali instead": "gp-015-blocked-users.html",
      "Block": "gp-015-blocked-users.html", "Cancel": "gp-054-matrimony-profile-detail.html" } },
    "gp-060-family-managed.html": { back: "gp-050-matrimony-intro.html", btn: {
      "Continue draft profile": "gp-051-matrimony-profile-setup.html",
      "Yes, allow my father": "gp-051-matrimony-profile-setup.html" } },
    "gp-061-call.html": { back: "gp-055-interests.html" },

    /* ---------- Phase 5 · Admin (sidebar links already real) ---------- */
    "ad-001-login.html": { btn: { "Open console": "ad-002-dashboard.html" } },
    "ad-002-dashboard.html": {},
    "ad-003-verification.html": {},
    "ad-004-approvals.html": {},
    "ad-005-cities.html": {},
    "ad-006-subadmins.html": {},
    "ad-007-broadcast.html": {},
    "ad-008-users.html": {},
    "ad-009-audit.html": {}
  };

  var rules = NAV[file] || {};

  function norm(s) { return (s || "").replace(/\s+/g, " ").trim(); }

  if (rules.back) {
    var b = document.querySelector(".appbar .iconbtn");
    if (b) b.setAttribute("data-goto", rules.back);
  }
  if (rules.btn) {
    var els = document.querySelectorAll("a, button");
    Array.prototype.forEach.call(els, function (el) {
      var t = norm(el.textContent);
      if (rules.btn.hasOwnProperty(t)) el.setAttribute("data-goto", rules.btn[t]);
    });
  }
  if (rules.chip) {
    var chips = document.querySelectorAll(".chip");
    Array.prototype.forEach.call(chips, function (el) {
      var t = norm(el.textContent);
      if (rules.chip.hasOwnProperty(t)) el.setAttribute("data-goto", rules.chip[t]);
    });
  }
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
  if (rules.sel) {
    Object.keys(rules.sel).forEach(function (s) {
      var found = document.querySelectorAll(s);
      Array.prototype.forEach.call(found, function (el) {
        el.setAttribute("data-goto", rules.sel[s]);
      });
    });
  }

  // Click handling: data-goto wins over any href; preserve clean mode
  var cleanMode = /#clean/.test(location.hash);
  function go(target) { location.href = target + (cleanMode ? "#clean" : ""); }
  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-goto]") : null;
    if (el) { e.preventDefault(); go(el.getAttribute("data-goto")); return; }
    if (cleanMode) {
      // keep every in-app link inside the clean view (e.g. admin sidebar)
      var a = e.target.closest ? e.target.closest("a[href]") : null;
      if (a) {
        var href = a.getAttribute("href") || "";
        if (/\.html?$/.test(href.split("?")[0]) && !/^(https?:|mailto:)/.test(href) &&
            !/^(viewer|prototype|index|flow)\.html/.test(href)) {
          e.preventDefault(); go(href);
          return;
        }
      }
    }
    if (rules.anywhere && !e.target.closest("a[href]")) {
      e.preventDefault(); go(rules.anywhere);
    }
  }, true);

  var st = document.createElement("style");
  st.textContent = "[data-goto]{cursor:pointer}";
  document.head.appendChild(st);

  // Clean mode (#clean): only the primary app frame, no docs chrome
  if (cleanMode) {
    document.documentElement.classList.add("gp-clean");
    var cs = document.createElement("style");
    cs.textContent =
      "html.gp-clean, html.gp-clean body { background: transparent !important; }" +
      "html.gp-clean .doc { max-width: none; margin: 0; padding: 0; }" +
      "html.gp-clean .doc-header, html.gp-clean .annot, html.gp-clean .doc-footer, html.gp-clean .frame-label { display: none !important; }" +
      "html.gp-clean .row { margin: 0 !important; gap: 0 !important; }" +
      "html.gp-clean .frame-block { gap: 0 !important; }" +
      "html.gp-clean .frame-block:not(:first-of-type) { display: none !important; }" +
      "html.gp-clean .phone { width: 390px; height: 844px; border: 0; border-radius: 0; box-shadow: none; }" +
      "html.gp-clean .admin-frame, html.gp-clean .login-frame { width: 1440px; height: 900px; border: 0; border-radius: 0; box-shadow: none; }";
    document.head.appendChild(cs);
  }

  // Tell the presentation shell which screen is showing
  try {
    parent.postMessage({ type: "gp-proto", file: file, title: document.title }, "*");
  } catch (err) { /* standalone view */ }
})();
