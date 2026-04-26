%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBoYXMgbm8gdXNhYmxlIHRleHRib29rIGZpZ3VyZXMsIGJ1dCB0aGUgbWFpbiBpZGVhIGlzIGhpZ2hseSB2aXN1YWw6IHN0dWRlbnRzIG5lZWQgdG8gc2VlIHRoYXQgdGhlIGVxdWFsLWRlZ3JlZSBpbXByb3BlciBjYXNlIGlzIGFsbW9zdCB0aGUgc2FtZSBhcyB0aGUgcHJvcGVyIGNhc2UsIGV4Y2VwdCBmb3Igb25lIGFkZGVkIGNvbnN0YW50IHRlcm0uIEEgY2xlYW4gZ2VuZXJhdGVkIGNvbXBhcmlzb24gZGlhZ3JhbSB3aWxsIG1ha2UgdGhlIHBhdHRlcm4gZmFzdGVyIHRvIHJlY29nbml6ZSB0aGFuIHRleHQgYWxvbmUuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIGltcHJpbnQgdGhlIGV4YW0gcGF0dGVybjogZXF1YWwgZGVncmVlcyBtZWFucyB3cml0ZSBjb25zdGFudCBwbHVzIG9yZGluYXJ5IHBhcnRpYWwgZnJhY3Rpb25zLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29tcGFyZSBwcm9wZXIgdnMgbT1uIHNldHVwIGFuZCBzdXBwb3J0IG9uZSB3b3JrZWQgZXhhbXBsZSB3aXRob3V0IG92ZXJsb2FkaW5nIGRldGFpbHMuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gc3RyZXNzIHRoYXQgb25seSB0aGUgZXh0cmEgY29uc3RhbnQgY2hhbmdlczsgY29lZmZpY2llbnQgZXh0cmFjdGlvbiBmb3IgdGhlIGZyYWN0aW9uIHRlcm1zIHN0YXlzIHRoZSBzYW1lLiJ9" style="display:none;"></div>%%KC_END%%
# B.5-5 Improper Fractions — The Special Case m = n

> **Section Objective:** Learn to handle the one improper rational case that barely differs from the proper case: when numerator and denominator have exactly the same degree.

---

Consider the fraction \(F(x) = \frac{3x^2 + 9x - 20}{x^2 + x - 6}\). Both numerator and denominator are degree 2. This makes \(F(x)\) improper — but only just barely. What changes?

This section covers the special case \(m = n\): the numerator and denominator share the same degree. The good news is that this case is simpler than general improper fractions. You do **not** need a full long-division workflow. Instead, you write **one extra constant term** in front of the usual partial fractions — and that is the only structural change.

By the end of this section you will be able to:
- Recognize the \(m = n\) pattern on sight
- Write the correct decomposition form immediately
- Solve for all coefficients quickly using the same cover-up method you already know

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="comparison_anchor" data-visual-use-b64="eyJjcmFtIjoiTWVtb3JpemUgdGhlIHBhdHRlcm46IGVxdWFsIGRlZ3JlZSBtZWFucyBhZGQgb25lIGNvbnN0YW50IGZpcnN0LiIsInN0YW5kYXJkIjoiVXNlIHRoZSBzaWRlLWJ5LXNpZGUgbGF5b3V0IHRvIHVuZGVyc3RhbmQgd2hhdCBjaGFuZ2VzIGFuZCB3aGF0IHN0YXlzIHRoZSBzYW1lLiIsInRvcF9zY29yZSI6IkZvY3VzIG9uIHRoZSBzdHJ1Y3R1cmFsIHJ1bGUgdGhhdCBjb2VmZmljaWVudCBleHRyYWN0aW9uIGZvciB0aGUgZnJhY3Rpb25hbCB0ZXJtcyBpcyB1bmNoYW5nZWQuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 The only structural difference between the proper case and the m = n improper case is the single extra constant term \(b_n\). Everything else — the fractional terms and how you find their coefficients — stays the same.*
![Illustration](/generated/gptimage2-1777216964450-2383.png)

## 1. The m = n Pattern

When the numerator and denominator have the **same degree**, the partial fraction setup is almost identical to the proper case. There is exactly one new feature: a constant term out front.

### THE RULE IN PLAIN LANGUAGE

Write a constant equal to the **leading coefficient of the numerator**, then add the ordinary partial fractions behind it.

If the denominator factors into \(n\) distinct linear factors, the full setup is:

$$F(x) = b_n + \frac{k_1}{x - \lambda_1} + \frac{k_2}{x - \lambda_2} + \cdots + \frac{k_n}{x - \lambda_n}$$

### EXAM NOTE

The coefficient formula is **unchanged**:

$$k_r = \left.(x - \lambda_r)\,F(x)\right|_{x = \lambda_r}$$

Cover up the factor \((x - \lambda_r)\) in the denominator, substitute \(x = \lambda_r\), and read off the value — exactly as you did for proper fractions.

#### Note on repeated and quadratic factors

If the denominator contains repeated or quadratic factors, those terms follow the same procedures already learned for the proper case. The only change is still just the leading constant \(b_n\) out front.

$$F(x)=\frac{b_n x^n+b_{n-1}x^{n-1}+\cdots+b_1x+b_0}{x^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0}=b_n+\frac{k_1}{x-\lambda_1}+\frac{k_2}{x-\lambda_2}+\cdots+\frac{k_n}{x-\lambda_n}$$
*When the numerator and denominator have equal degree, the partial fraction expansion gains exactly one extra constant term \(b_n\) — the leading coefficient of the numerator — while all remaining fractional terms look exactly like the proper-fraction case.*

$$k_r=\left.(x-\lambda_r)F(x)\right|_{x=\lambda_r}$$
*Each coefficient \(k_r\) is found by the same cover-up substitution method used for proper fractions: multiply through by \((x - \lambda_r)\), then evaluate at \(x = \lambda_r\).*

## 2. Worked Example

Let \(F(x) = \dfrac{3x^2 + 9x - 20}{x^2 + x - 6} = \dfrac{3x^2 + 9x - 20}{(x-2)(x+3)}\).

**Step 1 — Check degrees.** Numerator degree = 2, denominator degree = 2, so \(m = n = 2\). This is the special improper case.

**Step 2 — Write the form.** The leading numerator coefficient is 3, so the constant term is 3:

$$F(x) = 3 + \frac{k_1}{x-2} + \frac{k_2}{x+3}$$

**Step 3 — Find \(k_1\).** Cover \((x-2)\) and substitute \(x = 2\):

$$k_1 = \frac{3(2)^2 + 9(2) - 20}{2 + 3} = \frac{12 + 18 - 20}{5} = \frac{10}{5} = 2$$

**Step 4 — Find \(k_2\).** Cover \((x+3)\) and substitute \(x = -3\):

$$k_2 = \frac{3(-3)^2 + 9(-3) - 20}{-3 - 2} = \frac{27 - 27 - 20}{-5} = \frac{-20}{-5} = 4$$

**Final answer:**

$$F(x) = 3 + \frac{2}{x-2} + \frac{4}{x+3}$$

### EXAM TIP

The most common mistake in this section is writing \(\dfrac{2}{x-2} + \dfrac{4}{x+3}\) and stopping — forgetting the constant term 3 entirely. Always check degrees first, and always write the constant before the fractions.


---
**📌 Key Takeaways**
- When numerator and denominator degrees are equal, add one extra constant term \(b_n\) to the partial fraction setup.
- The coefficients \(k_r\) of the fractional terms are still found using the same cover-up substitution method.
- Forgetting the constant term is the main exam trap — always check degrees before writing the decomposition.

*In the next section we will see a modified partial fraction form used for later transform work.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJlY29nbml6ZV9tX2VxdWFsc19uX3N0cnVjdHVyZSIsImxhYmVsIjoiUmVjb2duaXplIHRoZSBzcGVjaWFsIGltcHJvcGVyIGNhc2UgbSA9IG4iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHNpdHVhdGlvbiBtYXRjaGVzIHRoZSBtZXRob2QgZnJvbSB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBUaGUgbnVtZXJhdG9yIGRlZ3JlZSBpcyBsZXNzIHRoYW4gdGhlIGRlbm9taW5hdG9yIGRlZ3JlZSIsIkIuIFRoZSBudW1lcmF0b3IgZGVncmVlIGlzIGdyZWF0ZXIgdGhhbiB0aGUgZGVub21pbmF0b3IgZGVncmVlIGJ5IDIgb3IgbW9yZSIsIkMuIFRoZSBudW1lcmF0b3IgZGVncmVlIGVxdWFscyB0aGUgZGVub21pbmF0b3IgZGVncmVlIiwiRC4gVGhlIGRlbm9taW5hdG9yIGlzIG5vdCBmYWN0b3JhYmxlIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhpcyBzZWN0aW9uIGhhbmRsZXMgdGhlIHNwZWNpYWwgaW1wcm9wZXIgY2FzZSB3aGVyZSB0aGUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciBoYXZlIHRoZSBzYW1lIGRlZ3JlZSwgXFwobSA9IG5cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCBpcyB0aGUgcHJvcGVyLWZyYWN0aW9uIGNhc2UsIG5vdCB0aGUgc3BlY2lhbCBpbXByb3BlciBjYXNlIGRpc2N1c3NlZCBoZXJlLiIsIkIiOiJUaGF0IHdvdWxkIHJlcXVpcmUgYSBtb3JlIGdlbmVyYWwgaW1wcm9wZXItZnJhY3Rpb24gdHJlYXRtZW50LCBub3QganVzdCB0aGUgZXh0cmEgY29uc3RhbnQgcGF0dGVybiBoZXJlLiIsIkQiOiJGYWN0b3JhYmlsaXR5IGlzIGEgc2VwYXJhdGUgaXNzdWU7IHRoZSBkZWZpbmluZyBjb25kaXRpb24gaGVyZSBpcyBlcXVhbGl0eSBvZiBkZWdyZWVzLiJ9LCJoaW50IjoiRm9jdXMgb24gdGhlIG1lYW5pbmcgb2YgXFwobSA9IG5cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBcXChGKHgpXFwpIGhhcyBlcXVhbC1kZWdyZWUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciBhbmQgZGlzdGluY3QgbGluZWFyIGZhY3RvcnMgYmVsb3csIHdoaWNoIHNldHVwIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChGKHgpPVxcZGZyYWN7a18xfXt4LVxcbGFtYmRhXzF9K1xcZGZyYWN7a18yfXt4LVxcbGFtYmRhXzJ9K1xcY2RvdHNcXCkiLCJCLiBcXChGKHgpPWJfbitcXGRmcmFje2tfMX17eC1cXGxhbWJkYV8xfStcXGRmcmFje2tfMn17eC1cXGxhbWJkYV8yfStcXGNkb3RzXFwpIiwiQy4gXFwoRih4KT1iX24geCtcXGRmcmFje2tfMX17eC1cXGxhbWJkYV8xfStcXGRmcmFje2tfMn17eC1cXGxhbWJkYV8yfStcXGNkb3RzXFwpIiwiRC4gXFwoRih4KT1cXGRmcmFje2tfMSB4fXt4LVxcbGFtYmRhXzF9K1xcZGZyYWN7a18yIHh9e3gtXFxsYW1iZGFfMn0rXFxjZG90c1xcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkZvciBcXChtID0gblxcKSwgdGhlIGV4cGFuc2lvbiBpcyB0aGUgdXN1YWwgcGFydGlhbCBmcmFjdGlvbiBmb3JtIHBsdXMgb25lIGV4dHJhIGNvbnN0YW50IHRlcm0gXFwoYl9uXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgbWlzc2VzIHRoZSBleHRyYSBjb25zdGFudCB0ZXJtLCB3aGljaCBpcyB0aGUga2V5IGZlYXR1cmUgb2YgdGhpcyBjYXNlLiIsIkMiOiJUaGUgYWRkZWQgdGVybSBpcyBhIGNvbnN0YW50IFxcKGJfblxcKSwgbm90IFxcKGJfbiB4XFwpLiIsIkQiOiJUaGF0IGlzIGEgZGlmZmVyZW50IG1vZGlmaWVkIGZvcm0sIG5vdCB0aGUgZm9ybSB0YXVnaHQgaW4gdGhpcyBzZWN0aW9uLiJ9LCJoaW50IjoiQXNrIHdoYXQgc2luZ2xlIGV4dHJhIGZlYXR1cmUgYXBwZWFycyB3aGVuIGRlZ3JlZXMgYXJlIGVxdWFsLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJnZW5lcmF0ZWRfaW1hZ2UiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImZpbmRfY29lZmZpY2llbnRzX3NhbWVfYXNfcHJvcGVyX2Nhc2UiLCJsYWJlbCI6IkZpbmQgY29lZmZpY2llbnRzIHVzaW5nIHRoZSB1c3VhbCBzdWJzdGl0dXRpb24gbWV0aG9kIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgXFwoRih4KT1cXGRmcmFjezN4XjIrOXgtMjB9eyh4LTIpKHgrMyl9PTMrXFxkZnJhY3trXzF9e3gtMn0rXFxkZnJhY3trXzJ9e3grM31cXCksIHdoYXQgaXMgXFwoa18xXFwpPyIsIm9wdGlvbnMiOlsiQS4gMSIsIkIuIDIiLCJDLiAzIiwiRC4gNCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlVzZSBcXChrXzEgPSBcXGxlZnQuKHgtMilGKHgpXFxyaWdodHxfe3g9Mn1cXCkuIFRoYXQgZ2l2ZXMgXFwoXFxkZnJhY3szKDIpXjIgKyA5KDIpIC0gMjB9ezIrM30gPSBcXGRmcmFjezEwfXs1fSA9IDJcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBkb2VzIG5vdCBtYXRjaCB0aGUgc3Vic3RpdHV0aW9uIHJlc3VsdC4iLCJDIjoiMyBpcyB0aGUgY29uc3RhbnQgdGVybSBpbiB0aGUgZGVjb21wb3NpdGlvbiwgbm90IFxcKGtfMVxcKS4iLCJEIjoiNCBpcyB0aGUgdmFsdWUgb2YgXFwoa18yXFwpLCBub3QgXFwoa18xXFwpLiJ9LCJoaW50IjoiQ292ZXIgdGhlIGZhY3RvciBcXCgoeC0yKVxcKSBhbmQgc3Vic3RpdHV0ZSBcXCh4ID0gMlxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlVzaW5nIHRoZSBzYW1lIGV4YW1wbGUsIHdoYXQgaXMgXFwoa18yXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoLTRcXCkiLCJCLiBcXCgtMlxcKSIsIkMuIDIiLCJELiA0Il0sImNvcnJlY3Rfb3B0aW9uIjoiRCIsImV4cGxhbmF0aW9uIjoiVXNlIFxcKGtfMiA9IFxcbGVmdC4oeCszKUYoeClcXHJpZ2h0fF97eD0tM31cXCkuIFRoYXQgZ2l2ZXMgXFwoXFxkZnJhY3syNyAtIDI3IC0gMjB9ey0zIC0gMn0gPSBcXGRmcmFjey0yMH17LTV9ID0gNFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc2lnbiBpcyB3cm9uZzsgYm90aCB0aGUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciBhcmUgbmVnYXRpdmUgaGVyZSwgc28gdGhlIHJlc3VsdCBpcyBwb3NpdGl2ZS4iLCJCIjoiVGhpcyBpcyBub3QgdGhlIGV2YWx1YXRlZCByZXN1bHQuIiwiQyI6IjIgaXMgXFwoa18xXFwpLCBub3QgXFwoa18yXFwpLiJ9LCJoaW50IjoiQ292ZXIgdGhlIGZhY3RvciBcXCgoeCszKVxcKSBhbmQgc3Vic3RpdHV0ZSBcXCh4ID0gLTNcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJleGFtX3RyYXBfY29uc3RhbnRfdGVybSIsImxhYmVsIjoiQXZvaWQgdGhlIG1haW4gZXhhbSB0cmFwIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgc3R1ZGVudCB3cml0ZXMgXFwoXFxkZnJhY3szeF4yKzl4LTIwfXsoeC0yKSh4KzMpfT1cXGRmcmFjezJ9e3gtMn0rXFxkZnJhY3s0fXt4KzN9XFwpLiBXaGF0IGlzIHRoZSBtaXN0YWtlPyIsIm9wdGlvbnMiOlsiQS4gVGhlIGZhY3RvcnMgc2hvdWxkIGJlIFxcKCh4KzIpXFwpIGFuZCBcXCgoeC0zKVxcKSIsIkIuIFRoZSBzdHVkZW50IHNob3VsZCBoYXZlIHVzZWQgXFwoeFxcKSBpbiB0aGUgbnVtZXJhdG9ycyIsIkMuIFRoZSBjb25zdGFudCB0ZXJtIDMgaXMgbWlzc2luZyIsIkQuIFRoZSB2YWx1ZXMgb2YgMiBhbmQgNCBzaG91bGQgYmUgc3dhcHBlZCJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkJlY2F1c2UgXFwobSA9IG5cXCksIHRoZSBkZWNvbXBvc2l0aW9uIG11c3QgaW5jbHVkZSB0aGUgZXh0cmEgY29uc3RhbnQgdGVybSAzIGluIGZyb250IG9mIHRoZSBmcmFjdGlvbmFsIHRlcm1zLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBmYWN0b3JpemF0aW9uIFxcKCh4LTIpKHgrMylcXCkgaXMgY29ycmVjdC4iLCJCIjoiVGhpcyBzZWN0aW9uIGRvZXMgbm90IHVzZSBcXCh4XFwpIGluIHRoZSBudW1lcmF0b3JzIG9mIHRoZSBwYXJ0aWFsIGZyYWN0aW9ucy4iLCJEIjoiVGhlIGNvZWZmaWNpZW50cyAyIGFuZCA0IGFyZSBhbHJlYWR5IGluIHRoZSBjb3JyZWN0IHBvc2l0aW9ucy4ifSwiaGludCI6IldoYXQgZXh0cmEgdGVybSBhcHBlYXJzIG9ubHkgYmVjYXVzZSB0aGUgZGVncmVlcyBhcmUgZXF1YWw/IiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJJbiBvbmUgb3IgdHdvIHNlbnRlbmNlcywgZXhwbGFpbiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBwcm9wZXItZnJhY3Rpb24gc2V0dXAgYW5kIHRoZSBzcGVjaWFsIGltcHJvcGVyIHNldHVwIHdoZW4gXFwobSA9IG5cXCkuIiwiaWRlYWxfYW5zd2VyIjoiVGhlIFxcKG0gPSBuXFwpIGNhc2UgaGFzIG9uZSBleHRyYSBjb25zdGFudCB0ZXJtIFxcKGJfblxcKSBpbiBmcm9udCBvZiB0aGUgdXN1YWwgcGFydGlhbCBmcmFjdGlvbnMuIFRoZSBjb2VmZmljaWVudHMgb2YgdGhlIGZyYWN0aW9uYWwgdGVybXMgYXJlIHRoZW4gZm91bmQgdGhlIHNhbWUgd2F5IGFzIGluIHRoZSBwcm9wZXIgY2FzZS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IG1lbnRpb24gdGhlIGV4dHJhIGNvbnN0YW50IHRlcm0gXFwoYl9uXFwpIiwiTXVzdCBzdGF0ZSB0aGF0IHRoZSByZW1haW5pbmcgY29lZmZpY2llbnRzIGFyZSBmb3VuZCBhcyBpbiB0aGUgcHJvcGVyIGNhc2UiLCJBbnN3ZXIgc2hvdWxkIGJlIGNvbmNpc2UgYW5kIG1hdGhlbWF0aWNhbGx5IGNvcnJlY3QiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBjb3JlIHJ1bGUsIG5vdCBqdXN0IHRoZSBzYW1wbGUgbnVtYmVycy4iLCJoaW50IjoiU3RhdGUgd2hhdCBjaGFuZ2VzLCB0aGVuIHN0YXRlIHdoYXQgc3RheXMgdGhlIHNhbWUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
