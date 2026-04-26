%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBtYXRoLWhlYXZ5IGFuZCBoYXMgbm8gZXh0cmFjdGVkIHRleHRib29rIGZpZ3VyZXMsIHNvIHRoZSBjbGVhcmVzdCBzdXBwb3J0IGlzIGEgY2xlYW4gZ2VuZXJhdGVkIHdvcmtmbG93IGRpYWdyYW0gc2hvd2luZyB0aGUgaHlicmlkIHNvbHZpbmcgb3JkZXIgZm9yIHJlcGVhdGVkLWZhY3RvciBwYXJ0aWFsIGZyYWN0aW9ucy4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gc2hvdyB0aGUgZmFzdGVzdCBkZWNpc2lvbiBwYXRoOiBjb3ZlciB1cCB0aGUgZWFzeSB0ZXJtcyBmaXJzdCwgdGhlbiBjbGVhciBmcmFjdGlvbnMgb3IgdXNlIGEgc2hvcnRjdXQgdG8gZmluaXNoIHRoZSBsYXN0IHVua25vd25zLiIsInN0YW5kYXJkIjoiVXNlIHZpc3VhbHMgdG8gY2xhcmlmeSB3aHkgdGhlIGh5YnJpZCBtZXRob2QgcmVkdWNlcyB3b3JrIGNvbXBhcmVkIHdpdGggcmVwZWF0ZWQgZGlmZmVyZW50aWF0aW9uLiIsInRvcF9zY29yZSI6IlVzZSB2aXN1YWxzIHRvIGV4cG9zZSB3aGVuIHRvIHN0b3AgZXF1YXRpbmcgY29lZmZpY2llbnRzLCB3aGVuIHRvIHVzZSBpbmZpbml0eSBvciBhIGNvbnZlbmllbnQgeC12YWx1ZSwgYW5kIGhvdyB0byBjaGVjayB0aGUgcmVzdWx0IGVmZmljaWVudGx5LiJ9" style="display:none;"></div>%%KC_END%%
# B.5-4 A Combination of Heaviside and Clearing Fractions

> **Section Objective:** Master the hybrid partial-fraction strategy for repeated factors — get the easy coefficients first, then finish the rest with the shortest algebra available.

---

Example B.10 targets a denominator of the form \((x+1)^3(x+2)\): one repeated cubic factor plus one simple factor. Full Heaviside differentiation on every repeated-root term is slow and error-prone under exam pressure.

The winning pattern is:

1. Write the partial-fraction form.
2. Use cover-up to grab the **free** coefficients \(k\) and \(a_0\) instantly.
3. Finish the remaining unknowns by clearing fractions or a one-line shortcut.

Payoff: fewer derivatives, faster coefficient recovery, and a built-in consistency check on the lower-power terms.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="exam_pattern_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgdmlzdWFsIHRvIG1lbW9yaXplIHRoZSBzb2x2aW5nIG9yZGVyIGluIHNlY29uZHMuIiwic3RhbmRhcmQiOiJVc2UgdGhpcyB2aXN1YWwgdG8gY29ubmVjdCBlYWNoIGFsZ2VicmEgc3RlcCB0byBpdHMgcHVycG9zZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhpcyB2aXN1YWwgdG8gY29tcGFyZSBhbHRlcm5hdGl2ZSBmaW5pc2hpbmcgdGFjdGljcyBhbmQgdHJhcCBwb2ludHMuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Hybrid method flowchart: grab the free coefficients first, then choose the fastest algebraic finish.*
![Illustration](/generated/gptimage2-1777215571325-2255.png)

## 1. Fast Recognition Rule

For the function

$$
F(x) = \frac{4x^3 + 16x^2 + 23x + 13}{(x+1)^3(x+2)}
$$

write the partial-fraction form immediately:

$$
F(x) = \frac{a_0}{(x+1)^3} + \frac{a_1}{(x+1)^2} + \frac{a_2}{x+1} + \frac{k}{x+2}
$$

### EXAM RULE: TAKE THE FREE COEFFICIENTS FIRST

**Finding \(k\):** Cover \((x+2)\) in the denominator and set \(x = -2\):

$$
k = \frac{4(-2)^3 + 16(-2)^2 + 23(-2) + 13}{(-2+1)^3} = \frac{-32+64-46+13}{-1} = \frac{-1}{-1} = 1
$$

**Finding \(a_0\):** Cover \((x+1)^3\) and set \(x = -1\):

$$
a_0 = \frac{4(-1)^3 + 16(-1)^2 + 23(-1) + 13}{(-1+2)} = \frac{-4+16-23+13}{1} = 2
$$

> **Key habit:** Do not start by expanding the full numerator. Grab \(k = 1\) and \(a_0 = 2\) in under a minute, then only \(a_1\) and \(a_2\) remain.

$$F(x)=\frac{4x^3+16x^2+23x+13}{(x+1)^3(x+2)}=\frac{2}{(x+1)^3}+\frac{a_1}{(x+1)^2}+\frac{a_2}{x+1}+\frac{1}{x+2}$$
*With \(a_0 = 2\) and \(k = 1\) already locked in, only \(a_1\) and \(a_2\) are unknown. Rather than differentiating twice more, choose the shortest algebraic route — clearing fractions or the infinity shortcut — to recover these two remaining coefficients.*

## 2. Finish the Remaining Coefficients Fast

### CLEARING FRACTIONS ROUTE

Multiply both sides by \((x+1)^3(x+2)\) to clear all denominators:

$$
4x^3+16x^2+23x+13 = 2(x+2) + a_1(x+1)(x+2) + a_2(x+1)^2(x+2) + (x+1)^3
$$

Now compare coefficients of matching powers. You only need **two equations** for **two unknowns**:

| Power | Equation | Result |
|-------|----------|---------|
| \(x^3\) | \(1 + a_2 = 4\) | \(a_2 = 3\) |
| \(x^2\) | \(a_1 + 4a_2 + 3 = 16\) | \(a_1 = 1\) |

**Stop here.** You have two unknowns and two equations — solve immediately.

### COMMON MISTAKE

> Students keep expanding lower-power terms (\(x^1\) and \(x^0\)) even after \(a_1\) and \(a_2\) are already determined. Those equations are only a **consistency check**, not a solving step. Expanding them wastes exam time.

#### Speed Rule
Once the number of solved equations equals the number of remaining unknowns, stop expanding and solve.

$$4x^3+16x^2+23x+13=2(x+2)+a_1(x+1)(x+2)+a_2(x+1)^2(x+2)+(x+1)^3$$
*This cleared-fractions identity is a polynomial equation that must hold for all values of \(x\). Comparing coefficients of \(x^3\) on both sides gives \(1 + a_2 = 4\), and comparing \(x^2\) coefficients gives \(a_1 + 4a_2 + 3 = 16\). These two equations alone are sufficient to determine both remaining unknowns \(a_1\) and \(a_2\) without expanding any further terms.*

## 3. Shortcut Version and Exam Traps

### THE INFINITY SHORTCUT

After clearing fractions, you have two unknowns \(a_1\) and \(a_2\). Instead of expanding and matching powers, use the **limit shortcut**:

**Step 1 — Multiply both sides by \(x\) and let \(x \to \infty\):**

As \(x \to \infty\), lower-order terms vanish. The dominant balance gives:

$$
4 = a_2 + 1 \implies a_2 = 3
$$

**Step 2 — Substitute a convenient value, \(x = 0\):**

With \(a_0 = 2\), \(k = 1\), and \(a_2 = 3\) already known, plugging \(x = 0\) into the cleared identity yields \(a_1 = 1\).

### EXAM TRAPS — WATCH FOR THESE

- **Do not use the infinity limit too early** — it only works cleanly once the known coefficients are already substituted in.
- **Do not forget the constants already found** — \(a_0\) and \(k\) must appear on the right side before you apply any shortcut.
- **Do not confuse a checking equation with a solving equation** — if the unknowns are already determined, extra equations only verify; they do not add information.

---
**📌 Key Takeaways**
- Recognize the repeated-factor pattern and write the full partial-fraction form immediately.
- Take the free coefficients \(k\) and \(a_0\) first using direct cover-up substitution.
- Finish remaining unknowns with the shortest method: clearing fractions or the infinity shortcut.

*In the next section we will handle improper rational functions when the numerator and denominator have the same degree.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Imh5YnJpZF9tZXRob2Rfc2VsZWN0aW9uIiwibGFiZWwiOiJDaG9vc2UgdGhlIGh5YnJpZCBtZXRob2QgZm9yIHJlcGVhdGVkIGZhY3RvcnMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoeSBpcyB0aGUgY29tYmluYXRpb24gbWV0aG9kIHVzZWZ1bCBmb3IgYSBkZW5vbWluYXRvciBzdWNoIGFzIFxcKCh4ICsgMSleMyh4ICsgMilcXCk/Iiwib3B0aW9ucyI6WyJBLiBJdCBhdm9pZHMgd3JpdGluZyBwYXJ0aWFsIGZyYWN0aW9ucyBhdCBhbGwiLCJCLiBJdCBsZXRzIHlvdSBnZXQgZWFzeSBjb2VmZmljaWVudHMgZmlyc3QgYW5kIGF2b2lkIHVubmVjZXNzYXJ5IHJlcGVhdGVkIGRpZmZlcmVudGlhdGlvbiIsIkMuIEl0IHdvcmtzIG9ubHkgd2hlbiBhbGwgZmFjdG9ycyBhcmUgZGlzdGluY3QiLCJELiBJdCBhbHdheXMgcmVxdWlyZXMgZXF1YXRpbmcgZXZlcnkgY29lZmZpY2llbnQgZnJvbSBcXCh4XjNcXCkgZG93biB0byB0aGUgY29uc3RhbnQgdGVybSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBtYWluIGV4YW0gYWR2YW50YWdlIGlzIHNwZWVkOiB1c2UgY292ZXItdXAgb24gZWFzeSBmYWN0b3JzIGZpcnN0LCB0aGVuIGZpbmlzaCB0aGUgcmVtYWluaW5nIHVua25vd25zIGFsZ2VicmFpY2FsbHkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiWW91IHN0aWxsIG11c3Qgd3JpdGUgdGhlIHBhcnRpYWwtZnJhY3Rpb24gZm9ybSBmaXJzdC4iLCJDIjoiVGhlIG1ldGhvZCBpcyBlc3BlY2lhbGx5IHVzZWZ1bCB3aGVuIHJlcGVhdGVkIGZhY3RvcnMgYXJlIHByZXNlbnQuIiwiRCI6IllvdSBvZnRlbiBzdG9wIGVhcmx5IG9uY2UgdGhlIHJlbWFpbmluZyB1bmtub3ducyBhcmUgZGV0ZXJtaW5lZC4ifSwiaGludCI6IlRoaW5rIGFib3V0IHdoYXQgcmVwZWF0ZWQgZmFjdG9ycyBtYWtlIHNsb3cgaW4gdGhlIGZ1bGwgSGVhdmlzaWRlIGFwcHJvYWNoLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIFxcKEYoeCkgPSBcXGZyYWN7NHheMyArIDE2eF4yICsgMjN4ICsgMTN9eyh4ICsgMSleMyh4ICsgMil9XFwpLCB3aGljaCBwYWlyIG9mIGNvZWZmaWNpZW50cyBpcyBtb3N0IGVmZmljaWVudCB0byBmaW5kIGZpcnN0PyIsIm9wdGlvbnMiOlsiQS4gXFwoYV8xXFwpIGFuZCBcXChhXzJcXCkiLCJCLiBcXChhXzJcXCkgYW5kIFxcKGtcXCkiLCJDLiBcXChrXFwpIGFuZCBcXChhXzBcXCkiLCJELiBcXChhXzBcXCkgYW5kIFxcKGFfMVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBleGFtcGxlIHNob3dzIHRoYXQgXFwoa1xcKSBmcm9tIFxcKHggPSAtMlxcKSBhbmQgXFwoYV8wXFwpIGZyb20gdGhlIHJlcGVhdGVkLXJvb3QgaGlnaGVzdC1wb3dlciB0ZXJtIGF0IFxcKHggPSAtMVxcKSBhcmUgdGhlIHF1aWNrZXN0IGNvZWZmaWNpZW50cyB0byByZWNvdmVyIGJ5IGRpcmVjdCBzdWJzdGl0dXRpb24uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlc2UgYXJlIHRoZSBsZWZ0b3ZlciBjb2VmZmljaWVudHMgdXN1YWxseSBmb3VuZCBhZnRlciB0aGUgZWFzeSBvbmVzLiIsIkIiOiJcXChhXzJcXCkgaXMgbm90IHRoZSBmaXJzdCBlYXN5IHRhcmdldCBoZXJlLiIsIkQiOiJcXChhXzFcXCkgdXN1YWxseSBuZWVkcyBtb3JlIHdvcmsgdGhhbiBcXChhXzBcXCkuIn0sImhpbnQiOiJQaWNrIHRoZSBjb2VmZmljaWVudHMgZGlyZWN0bHkgZXhwb3NlZCBieSBzdWJzdGl0dXRpb24g4oCUIG5vIGV4cGFuc2lvbiBuZWVkZWQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjbGVhcmluZ19mcmFjdGlvbnNfZXhlY3V0aW9uIiwibGFiZWwiOiJVc2UgY2xlYXJpbmcgZnJhY3Rpb25zIGFuZCBzdG9wIGFzIHNvb24gYXMgZW5vdWdoIGVxdWF0aW9ucyBhcmUgb2J0YWluZWQiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkFmdGVyIGZpbmRpbmcgXFwoYV8wID0gMlxcKSBhbmQgXFwoayA9IDFcXCksIGNsZWFyaW5nIGZyYWN0aW9ucyBnaXZlcyBlcXVhdGlvbnMgaW5jbHVkaW5nIFxcKDEgKyBhXzIgPSA0XFwpIGFuZCBcXChhXzEgKyA0YV8yICsgMyA9IDE2XFwpLiBXaGF0IHNob3VsZCB5b3UgZG8gbmV4dCBpbiBhbiBleGFtIHNldHRpbmc/Iiwib3B0aW9ucyI6WyJBLiBTdG9wIGFuZCBzb2x2ZSB0aGVzZSB0d28gZXF1YXRpb25zIGZvciBcXChhXzFcXCkgYW5kIFxcKGFfMlxcKSIsIkIuIEV4cGFuZCBhbGwgcmVtYWluaW5nIHRlcm1zIGNvbXBsZXRlbHkgYmVmb3JlIHNvbHZpbmcgYW55dGhpbmciLCJDLiBEaWZmZXJlbnRpYXRlIGJvdGggc2lkZXMgdG8gY3JlYXRlIG1vcmUgZXF1YXRpb25zIiwiRC4gSWdub3JlIHRoZXNlIGVxdWF0aW9ucyBhbmQgcmVzdGFydCB3aXRoIGZ1bGwgSGVhdmlzaWRlIGRpZmZlcmVudGlhdGlvbiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZXJlIGFyZSB0d28gdW5rbm93bnMgYW5kIGFscmVhZHkgdHdvIHVzZWZ1bCBlcXVhdGlvbnMsIHNvIHRoZSBmYXN0ZXN0IG1vdmUgaXMgdG8gc29sdmUgaW1tZWRpYXRlbHkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhhdCBhZGRzIHdvcmsgd2l0aG91dCBpbXByb3ZpbmcgdGhlIGFuc3dlci4iLCJDIjoiRGlmZmVyZW50aWF0aW9uIGlzIHVubmVjZXNzYXJ5IGhlcmUuIiwiRCI6IlJlc3RhcnRpbmcgaXMgc2xvd2VyIGFuZCBkZWZlYXRzIHRoZSBwdXJwb3NlIG9mIHRoZSBoeWJyaWQgbWV0aG9kLiJ9LCJoaW50IjoiQ291bnQgdW5rbm93bnMsIHRoZW4gY291bnQgZXF1YXRpb25zIOKAlCBpZiB0aGV5IG1hdGNoLCBzb2x2ZSBub3cuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiSW4gb25lIG9yIHR3byBzZW50ZW5jZXMsIGV4cGxhaW4gd2h5IGVxdWF0aW5nIHRoZSBsb3dlci1wb3dlciBjb2VmZmljaWVudHMgYWZ0ZXIgZmluZGluZyBcXChhXzFcXCkgYW5kIFxcKGFfMlxcKSBpcyBvcHRpb25hbCByYXRoZXIgdGhhbiBlc3NlbnRpYWwuIiwiaWRlYWxfYW5zd2VyIjoiT25jZSB0aGUgcmVtYWluaW5nIHVua25vd25zIGFyZSBhbHJlYWR5IGRldGVybWluZWQgZnJvbSBlbm91Z2ggZXF1YXRpb25zLCB0aGUgbG93ZXItcG93ZXIgY29lZmZpY2llbnQgZXF1YXRpb25zIGFyZSBvbmx5IGEgY29uc2lzdGVuY3kgY2hlY2suIFRoZXkgY2FuIGNvbmZpcm0gdGhlIGFuc3dlciBidXQgYXJlIG5vdCBuZWVkZWQgdG8gc29sdmUgZm9yIHRoZSBjb2VmZmljaWVudHMuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzYXkgdGhlIHVua25vd25zIGFyZSBhbHJlYWR5IGRldGVybWluZWQiLCJNdXN0IGlkZW50aWZ5IGxvd2VyLXBvd2VyIGVxdWF0aW9ucyBhcyBhIGNoZWNrIG9yIHZlcmlmaWNhdGlvbiIsIk11c3QgZGlzdGluZ3Vpc2ggc29sdmluZyBmcm9tIGNoZWNraW5nIl0sImV4cGxhbmF0aW9uIjoiVGhpcyB0ZXN0cyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBzcGVlZCBsb2dpYyBpbnN0ZWFkIG9mIGJsaW5kbHkgZXhwYW5kaW5nIGV2ZXJ5dGhpbmcuIiwiaGludCI6IkFzayB3aGV0aGVyIHRob3NlIGV4dHJhIGVxdWF0aW9ucyBjcmVhdGUgbmV3IGluZm9ybWF0aW9uIG9yIGp1c3QgY29uZmlybSBvbGQgaW5mb3JtYXRpb24uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJzaG9ydGN1dF9maW5pc2hlcnMiLCJsYWJlbCI6IlVzZSBpbmZpbml0eSBhbmQgY29udmVuaWVudCBzdWJzdGl0dXRpb24gYXMgZmluaXNoaW5nIHNob3J0Y3V0cyIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBzaG9ydGN1dCBhcHByb2FjaCBmb3IgdGhlIHNhbWUgZXhhbXBsZSwgd2h5IGRvZXMgbXVsdGlwbHlpbmcgYm90aCBzaWRlcyBieSBcXCh4XFwpIGFuZCBsZXR0aW5nIFxcKHggXFx0byBcXGluZnR5XFwpIGhlbHA/Iiwib3B0aW9ucyI6WyJBLiBJdCB0dXJucyBldmVyeSBkZW5vbWluYXRvciBpbnRvIHplcm8iLCJCLiBJdCBpc29sYXRlcyB0aGUgaGlnaGVzdC1vcmRlciBzdXJ2aXZpbmcgY29udHJpYnV0aW9uIGFuZCBlbGltaW5hdGVzIGxvd2VyLW9yZGVyIGxlZnRvdmVycyIsIkMuIEl0IGdpdmVzIFxcKGFfMFxcKSBkaXJlY3RseSBpbnN0ZWFkIG9mIFxcKGFfMlxcKSIsIkQuIEl0IGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyBcXCh4ID0gMFxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBsaW1pdCBhdCBpbmZpbml0eSBrZWVwcyB0aGUgZG9taW5hbnQgdGVybXMgYW5kIHJlbW92ZXMgdGhlIHNtYWxsZXItb3JkZXIgY29udHJpYnV0aW9ucywgbWFraW5nIGl0IHVzZWZ1bCB3aGVuIG9ubHkgYSBmZXcgdW5rbm93bnMgcmVtYWluLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkRlbm9taW5hdG9ycyBkbyBub3QgYmVjb21lIHplcm8gaW4gdGhpcyBsaW1pdCBwcm9jZXNzLiIsIkMiOiJJbiB0aGlzIGV4YW1wbGUgaXQgaXMgdXNlZCB0byBnZXQgXFwoYV8yXFwpIGFmdGVyIGtub3duIHRlcm1zIGFyZSBhY2NvdW50ZWQgZm9yLiIsIkQiOiJBIGZpbml0ZSBzdWJzdGl0dXRpb24gYW5kIGEgbGltaXQgYXQgaW5maW5pdHkgc2VydmUgZGlmZmVyZW50IHB1cnBvc2VzLiJ9LCJoaW50IjoiVGhpbmsgZG9taW5hbnQgYmVoYXZpb3IgYXMgXFwoeFxcKSBncm93cyBsYXJnZSwgbm90IGRpcmVjdCBzdWJzdGl0dXRpb24uIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImdlbmVyYXRlX2ltYWdlIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQWZ0ZXIgZmluZGluZyBcXChhXzIgPSAzXFwpIGJ5IHRoZSBpbmZpbml0eSBzaG9ydGN1dCwgd2hhdCBpcyB0aGUgZmFzdGVzdCBuZXh0IG1vdmUgdG8gZ2V0IFxcKGFfMVxcKT8iLCJvcHRpb25zIjpbIkEuIFNldCBcXCh4XFwpIHRvIGEgY29udmVuaWVudCB2YWx1ZSBzdWNoIGFzIFxcKDBcXCkiLCJCLiBEaWZmZXJlbnRpYXRlIHR3aWNlIiwiQy4gUmVjb21wdXRlIFxcKGtcXCkiLCJELiBGYWN0b3IgdGhlIG51bWVyYXRvciBhZ2FpbiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IldpdGggb25seSBvbmUgdW5rbm93biBsZWZ0LCBhIGNvbnZlbmllbnQgXFwoeFxcKS12YWx1ZSBnaXZlcyBcXChhXzFcXCkgaW1tZWRpYXRlbHkgd2l0aG91dCBhbnkgZnVydGhlciBkaWZmZXJlbnRpYXRpb24gb3IgZXhwYW5zaW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkRpZmZlcmVudGlhdGlvbiBpcyB1bm5lY2Vzc2FyeSBvbmNlIG9ubHkgb25lIGNvZWZmaWNpZW50IHJlbWFpbnMuIiwiQyI6IlxcKGtcXCkgaXMgYWxyZWFkeSBrbm93biBhbmQgZG9lcyBub3QgaGVscCBmaW5pc2ggZmFzdGVyLiIsIkQiOiJUaGUgbnVtZXJhdG9yIGlzIGFscmVhZHkgaW4gdXNhYmxlIGZvcm0uIn0sImhpbnQiOiJXaGVuIG9uZSB1bmtub3duIHJlbWFpbnMsIG9uZSBzbWFydCBzdWJzdGl0dXRpb24gaXMgZW5vdWdoLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfV19" style="display:none;"></div>%%KC_END%%
