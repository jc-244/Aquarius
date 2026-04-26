%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IkFnZW50IEEgSlNPTiBmYWlsZWQsIHNvIHJlbHkgb24gb25lIGdlbmVyYXRlZCBncHRpbWFnZTIgdGVhY2hpbmcgdmlzdWFsIGluc3RlYWQgb2YgcmV0dXJuaW5nIGEgdGV4dC1vbmx5IGxlc3Nvbi4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gcmVjb2duaXplIHRoZSBleGFtIHBhdHRlcm4gcXVpY2tseS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIHRvIGNsYXJpZnkgdGhlIGNvcmUgY29uY2VwdCB3aXRoIGEgc2luZ2xlIGNsZWFyIHBhdGguIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gaGlnaGxpZ2h0IHN1YnRsZSBkaXN0aW5jdGlvbnMsIHRyYXBzLCBvciB2YXJpYW50cy4ifQ==" style="display:none;"></div>%%KC_END%%
## Overview

> **Objective:** Build a reliable reference toolkit of mathematical formulas that appear repeatedly in signals and systems work — and know which ones the exam tests most.

Section B.8 closes Chapter B by collecting the most useful mathematical facts in one place: key constants, complex number identities, summation formulas, Taylor and Maclaurin series, power series, trigonometric identities, and derivative rules.

Think of this appendix as your formula sheet decoded. Rather than memorizing symbols blindly, you will understand *why* each formula has the shape it does and *where* it shows up in problem-solving. After working through this section, you will be able to recognize the correct formula for a given situation, apply it without sign errors, and avoid the most common exam traps.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiU2NhbiB0aGUgZml2ZSByb3dzIHRvIGluc3RhbnRseSBsb2NhdGUgd2hpY2ggZm9ybXVsYSBncm91cCBhcHBsaWVzIHRvIHlvdXIgcHJvYmxlbS4iLCJzdGFuZGFyZCI6IlVzZSBlYWNoIHJvdyB0byBjb25uZWN0IHRoZSBmb3JtdWxhJ3Mgc3RydWN0dXJlIHRvIGl0cyBnZW9tZXRyaWMgb3IgYWxnZWJyYWljIG1lYW5pbmcgYmVmb3JlIGFwcGx5aW5nIGl0LiIsInRvcF9zY29yZSI6IkZvY3VzIG9uIHRoZSByZWQgY2FsbG91dCDigJQgc2lnbiBlcnJvcnMgaW4gdHJpZyBpZGVudGl0aWVzIGFuZCB0aGUgZGlyZWN0aW9uIG9mIGFuZ2xlIHRoZXRhIGFyZSB0aGUgbW9zdCBjb21tb24gc291cmNlcyBvZiBsb3N0IG1hcmtzLiJ9" style="display:none;"></div>%%KC_END%%
*🎨 The five formula groups in B.8, organized by type. The red callout flags the most common exam trap: sign errors in trigonometric identities and angle conventions.*
![Illustration](/generated/gptimage2-1777215231448-3382.png)

## Core Idea

Every formula in B.8 belongs to one of five groups, and each group has a single unifying logic:

---

### 1. CONSTANTS

\(\pi\) and \(e\) appear in almost every formula in this course. Know their decimal approximations to at least four places.

---

### 2. COMPLEX NUMBER IDENTITIES

The master identity is **Euler's formula**:

$$e^{j\theta} = \cos\theta + j\sin\theta$$

From this one line, every other complex identity follows. For example, \(a + jb = re^{j\theta}\) where \(r = \sqrt{a^2 + b^2}\) and \(\theta = \tan^{-1}\!\left(\frac{b}{a}\right)\). Multiplication in polar form becomes addition of angles: \((r_1 e^{j\theta_1})(r_2 e^{j\theta_2}) = r_1 r_2\, e^{j(\theta_1+\theta_2)}\).

### EXAM TRAP

The imaginary part of \(a + jb\) is \(b\), not \(jb\). And \(\theta\) is measured from the positive real axis — a negative \(b\) puts you in the third or fourth quadrant.

---

### 3. SUMS

The geometric series formula

$$\sum_{k=m}^{n} r^k = \frac{r^{n+1} - r^m}{r - 1}, \quad r \neq 1$$

is the workhorse for discrete-time signal analysis. The special case \(\sum_{k=0}^{n} k = \frac{n(n+1)}{2}\) appears in combinatorics and index bookkeeping.

---

### 4. POWER SERIES

The Maclaurin series expands a function around \(x = 0\):

$$f(x) = \sum_{k=0}^{\infty} \frac{x^k}{k!}\, f^{(k)}(0)$$

The three you must know cold:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$$

$$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$

#### Note
These series converge for all real \(x\). Truncating after two or three terms gives a useful approximation for small \(x\).

---

### 5. TRIGONOMETRIC IDENTITIES

The most exam-relevant identity is the **sinusoid combination formula**:

$$a\cos x + b\sin x = C\cos(x + \theta), \quad C = \sqrt{a^2 + b^2},\ \theta = \tan^{-1}\!\left(\frac{-b}{a}\right)$$

Note the **negative sign** inside the arctangent — this is the most common source of sign errors on exams.

The product-to-sum identities convert products of sinusoids into sums, which is essential for frequency analysis:

$$\sin x \sin y = \tfrac{1}{2}[\cos(x-y) - \cos(x+y)]$$

$$\cos x \cos y = \tfrac{1}{2}[\cos(x-y) + \cos(x+y)]$$

$$\sin x \cos y = \tfrac{1}{2}[\sin(x-y) + \sin(x+y)]$$

> **Key Insight:** Every formula in this appendix is a tool for *simplification* — converting a complicated expression into a form that is easier to analyze or compute. When you see a product of sinusoids, reach for product-to-sum. When you see a complex exponential, reach for Euler's formula.

---
**📌 Key Takeaways**
- Euler's formula \(e^{j\theta} = \cos\theta + j\sin\theta\) is the root of all complex number identities in this appendix.
- The geometric series sum and power series expansions of \(e^x\), \(\cos x\), \(\sin x\) are the highest-yield formulas for exams.
- The sinusoid combination formula \(a\cos x + b\sin x = C\cos(x+\theta)\) has a critical negative sign in \(\theta = \tan^{-1}(-b/a)\) — do not drop it.

*With this formula toolkit in hand, the next sections will apply these identities directly to analyzing signals and systems — you will see Euler's formula and the geometric series appear in nearly every derivation.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NCwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo0LCJtYXgiOjV9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImJfOF9hcHBlbmRpeF91c2VmdWxfbWF0aGVtYXRpY2FsX2Zvcm11bGFzX2NvcmUiLCJsYWJlbCI6IkIuOCBBcHBlbmRpeDogVXNlZnVsIE1hdGhlbWF0aWNhbCBGb3JtdWxhcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImNvcmVfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBiZXN0IGNhcHR1cmVzIHRoZSBtYWluIGxlYXJuaW5nIGdvYWwgb2YgQi44IEFwcGVuZGl4OiBVc2VmdWwgTWF0aGVtYXRpY2FsIEZvcm11bGFzPyIsIm9wdGlvbnMiOlsiQS4gTWVtb3JpemUgdGhlIGZpbmFsIHJlc3VsdCB3aXRob3V0IGNvbm5lY3RpbmcgaXQgdG8gdGhlIHZpc3VhbCBvciBzdHJ1Y3R1cmFsIG1lYW5pbmciLCJCLiBVbmRlcnN0YW5kIHRoZSBjb3JlIGRlZmluaXRpb24sIHRoZSB2aXN1YWwvc3RydWN0dXJhbCBtZWFuaW5nLCBhbmQgaG93IHRoZSBpZGVhIGFwcGVhcnMgaW4gZXhhbSBxdWVzdGlvbnMiLCJDLiBUcmVhdCB0aGUgdG9waWMgYXMgcHVyZSBzeW1ib2wgbWFuaXB1bGF0aW9uIHdpdGggbm8gY29uY2VwdHVhbCBzdHJ1Y3R1cmUiLCJELiBGb2N1cyBvbmx5IG9uIHRlcm1pbm9sb2d5IGJlY2F1c2UgdGhlIGV4YW0gbmV2ZXIgdGVzdHMgaW50ZXJwcmV0YXRpb24iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJTdHJvbmcgdW5kZXJzdGFuZGluZyBpbiB0aGlzIHNlY3Rpb24gbWVhbnMgY29ubmVjdGluZyB0aGUgZGVmaW5pdGlvbiwgdGhlIHN0cnVjdHVyZS92aXN1YWwgbWVhbmluZywgYW5kIHRoZSBleGFtLWZhY2luZyBpbnRlcnByZXRhdGlvbi4gRm9yIGV4YW1wbGUsIGtub3dpbmcgdGhhdCBcXChlXntqXFx0aGV0YX0gPSBcXGNvc1xcdGhldGEgKyBqXFxzaW5cXHRoZXRhXFwpIGlzIG5vdCBqdXN0IGEgc3ltYm9sIHJ1bGUg4oCUIGl0IGVuY29kZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSBjb21wbGV4IHBsYW5lIGFuZCBkcml2ZXMgZXZlcnkgY29tcGxleCBudW1iZXIgY2FsY3VsYXRpb24gaW4gdGhlIGNvdXJzZS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJNZW1vcml6YXRpb24gYWxvbmUgdXN1YWxseSBicmVha3Mgb24gdmFyaWFudHMgYW5kIHRyYXAgcXVlc3Rpb25zIOKAlCBmb3IgaW5zdGFuY2UsIGZvcmdldHRpbmcgdGhlIG5lZ2F0aXZlIHNpZ24gaW4gXFwoXFx0aGV0YSA9IFxcdGFuXnstMX0oLWIvYSlcXCkuIiwiQyI6IlRoZSBzZWN0aW9uIGlzIG1lYW50IHRvIGJlIHVuZGVyc3Rvb2Qgc3RydWN0dXJhbGx5OiBlYWNoIGZvcm11bGEgZ3JvdXAgaGFzIGEgdW5pZnlpbmcgbG9naWMsIG5vdCBqdXN0IGEgbGlzdCBvZiBzeW1ib2xzLiIsIkQiOiJJbnRlcnByZXRhdGlvbiBpcyBleGFjdGx5IHdoYXQgbWFueSBleGFtIHF1ZXN0aW9ucyBwcm9iZSDigJQgZS5nLiwgaWRlbnRpZnlpbmcgd2hpY2ggZm9ybXVsYSBncm91cCBhcHBsaWVzIHRvIGEgZ2l2ZW4gZXhwcmVzc2lvbi4ifSwiaGludCI6IlBpY2sgdGhlIG9wdGlvbiB0aGF0IGNvbWJpbmVzIG1lYW5pbmcsIHJlcHJlc2VudGF0aW9uLCBhbmQgZXhhbSB1c2UuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImNvcmVfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoZW4gY29tYmluaW5nIFxcKGFcXGNvcyB4ICsgYlxcc2luIHhcXCkgaW50byBhIHNpbmdsZSBzaW51c29pZCBcXChDXFxjb3MoeCArIFxcdGhldGEpXFwpLCB3aGljaCBleHByZXNzaW9uIGNvcnJlY3RseSBnaXZlcyB0aGUgcGhhc2UgYW5nbGUgXFwoXFx0aGV0YVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFxcdGhldGEgPSBcXHRhbl57LTF9XFwhXFxsZWZ0KFxcZGZyYWN7Yn17YX1cXHJpZ2h0KVxcKSIsIkIuIFxcKFxcdGhldGEgPSBcXHRhbl57LTF9XFwhXFxsZWZ0KFxcZGZyYWN7LWJ9e2F9XFxyaWdodClcXCkiLCJDLiBcXChcXHRoZXRhID0gXFx0YW5eey0xfVxcIVxcbGVmdChcXGRmcmFje2F9e2J9XFxyaWdodClcXCkiLCJELiBcXChcXHRoZXRhID0gXFx0YW5eey0xfVxcIVxcbGVmdChcXGRmcmFjey1hfXtifVxccmlnaHQpXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGNvcnJlY3QgZm9ybXVsYSBpcyBcXChcXHRoZXRhID0gXFx0YW5eey0xfVxcIVxcbGVmdChcXGZyYWN7LWJ9e2F9XFxyaWdodClcXCkuIFRoZSBuZWdhdGl2ZSBzaWduIG9uIFxcKGJcXCkgY29tZXMgZnJvbSBleHBhbmRpbmcgXFwoQ1xcY29zKHgrXFx0aGV0YSkgPSBDXFxjb3NcXHRoZXRhXFxjb3MgeCAtIENcXHNpblxcdGhldGFcXHNpbiB4XFwpIGFuZCBtYXRjaGluZyBjb2VmZmljaWVudHM6IFxcKGEgPSBDXFxjb3NcXHRoZXRhXFwpIGFuZCBcXChiID0gLUNcXHNpblxcdGhldGFcXCksIHNvIFxcKFxcdGFuXFx0aGV0YSA9IC1iL2FcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiTWlzc2luZyB0aGUgbmVnYXRpdmUgc2lnbiDigJQgdGhpcyBpcyB0aGUgbW9zdCBjb21tb24gZXhhbSBlcnJvciBvbiB0aGlzIGZvcm11bGEuIiwiQyI6IlRoZSByYXRpbyBpcyBpbnZlcnRlZDsgXFwoYVxcKSBhbmQgXFwoYlxcKSBhcmUgc3dhcHBlZC4iLCJEIjoiQm90aCB0aGUgc2lnbiBhbmQgdGhlIHJhdGlvIGFyZSB3cm9uZy4ifSwiaGludCI6IkV4cGFuZCBcXChDXFxjb3MoeCtcXHRoZXRhKVxcKSB1c2luZyB0aGUgYW5nbGUtYWRkaXRpb24gZm9ybXVsYSBhbmQgbWF0Y2ggdGhlIFxcKFxcc2luIHhcXCkgY29lZmZpY2llbnQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImNvcmVfcTMiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlVzaW5nIHRoZSBnZW9tZXRyaWMgc2VyaWVzIGZvcm11bGEsIHdoYXQgaXMgXFwoXFxkaXNwbGF5c3R5bGVcXHN1bV97az0wfV57M30gMl5rXFwpPyIsIm9wdGlvbnMiOlsiQS4gMTQiLCJCLiAxNSIsIkMuIDE2IiwiRC4gOCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkFwcGx5IFxcKFxcc3VtX3trPTB9XntufSByXmsgPSBcXGZyYWN7cl57bisxfS0xfXtyLTF9XFwpIHdpdGggXFwocj0yXFwpLCBcXChuPTNcXCk6IFxcKFxcZnJhY3syXjQgLSAxfXsyLTF9ID0gXFxmcmFjezE1fXsxfSA9IDE1XFwpLiBBbHRlcm5hdGl2ZWx5LCBcXCgxICsgMiArIDQgKyA4ID0gMTVcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiT2ZmIGJ5IG9uZSDigJQgYSBjb21tb24gZXJyb3Igd2hlbiB0aGUgdXBwZXIgbGltaXQgb2YgdGhlIGV4cG9uZW50IGlzIGNvbmZ1c2VkIHdpdGggdGhlIG51bWJlciBvZiB0ZXJtcy4iLCJDIjoiXFwoMl40ID0gMTZcXCkgaXMgdGhlIG5leHQgdGVybSBiZXlvbmQgdGhlIHN1bSwgbm90IHRoZSBzdW0gaXRzZWxmLiIsIkQiOiJcXCgyXjMgPSA4XFwpIGlzIG9ubHkgdGhlIGxhc3QgdGVybSwgbm90IHRoZSB0b3RhbC4ifSwiaGludCI6IlVzZSBcXChcXGZyYWN7cl57bisxfSAtIHJebX17ci0xfVxcKSB3aXRoIFxcKG09MFxcKSwgXFwobj0zXFwpLCBcXChyPTJcXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImNvcmVfcTQiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkluIDEtMiBzZW50ZW5jZXMsIGV4cGxhaW4gdGhlIGNvcmUgcmVsYXRpb25zaGlwIGEgc3R1ZGVudCBzaG91bGQgbm90aWNlIGZpcnN0IHdoZW4gbGVhcm5pbmcgQi44IEFwcGVuZGl4OiBVc2VmdWwgTWF0aGVtYXRpY2FsIEZvcm11bGFzLiIsImlkZWFsX2Fuc3dlciI6IlRoZSBzdHVkZW50IHNob3VsZCBmaXJzdCByZWNvZ25pemUgdGhhdCBFdWxlcidzIGZvcm11bGEgXFwoZV57alxcdGhldGF9ID0gXFxjb3NcXHRoZXRhICsgalxcc2luXFx0aGV0YVxcKSBpcyB0aGUgY2VudHJhbCBzdHJ1Y3R1cmFsIHJlbGF0aW9uc2hpcCBmcm9tIHdoaWNoIGFsbCBjb21wbGV4IG51bWJlciBpZGVudGl0aWVzIGluIHRoZSBhcHBlbmRpeCBmb2xsb3cuIFRoZXkgc2hvdWxkIHRoZW4gY29ubmVjdCB0aGlzIHRvIHRoZSB2aXN1YWwgZ2VvbWV0cnkgb2YgdGhlIGNvbXBsZXggcGxhbmUgKG1hZ25pdHVkZSBcXChyXFwpLCBhbmdsZSBcXChcXHRoZXRhXFwpKSBhbmQgdW5kZXJzdGFuZCB0aGF0IHRoZSBvdGhlciBmb3JtdWxhIGdyb3VwcyDigJQgc3VtcywgcG93ZXIgc2VyaWVzLCB0cmlnIGlkZW50aXRpZXMg4oCUIGVhY2ggcHJvdmlkZSBhIHNpbXBsaWZpY2F0aW9uIHRvb2wgZm9yIGEgc3BlY2lmaWMgdHlwZSBvZiBleHByZXNzaW9uIGVuY291bnRlcmVkIGluIGV4YW0gcHJvYmxlbXMuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBpZGVudGlmeSBFdWxlcidzIGZvcm11bGEgb3IgdGhlIHJlY3Rhbmd1bGFyLXRvLXBvbGFyIGNvbnZlcnNpb24gYXMgdGhlIGNvcmUgc3RydWN0dXJhbCByZWxhdGlvbnNoaXAiLCJNdXN0IGNvbm5lY3QgaXQgdG8gYSB2aXN1YWwgb3Igc3ltYm9saWMgcmVwcmVzZW50YXRpb24gKGNvbXBsZXggcGxhbmUsIG1hZ25pdHVkZSBhbmQgYW5nbGUsIG9yIHNpbnVzb2lkIGZvcm0pIiwiTXVzdCBtZW50aW9uIGV4YW0gaW50ZXJwcmV0YXRpb24gb3IgcHJvYmxlbS1zb2x2aW5nIHVzZSAoZS5nLiwgd2hpY2ggZm9ybXVsYSB0byByZWFjaCBmb3IgaW4gYSBnaXZlbiBzaXR1YXRpb24pIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBzZWVzIHRoZSBtYWluIHRocmVhZCBvZiB0aGUgc2VjdGlvbiDigJQgdGhhdCB0aGUgZm9ybXVsYXMgYXJlIG9yZ2FuaXplZCB0b29scywgbm90IGFuIGFyYml0cmFyeSBsaXN0IOKAlCByYXRoZXIgdGhhbiBpc29sYXRlZCBmYWN0cy4iLCJoaW50IjoiU3RhcnQgd2l0aCAndGhlIG1haW4gcmVsYXRpb25zaGlwIGlzLi4uJyBhbmQgdGhlbiBzYXkgaG93IGl0IGNvbm5lY3RzIHRvIHRoZSBnZW9tZXRyeSBvciB0byBleGFtIHByb2JsZW1zLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
