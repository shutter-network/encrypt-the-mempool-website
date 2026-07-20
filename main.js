// Accordion: reasons
document.querySelectorAll('.reasons__trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.reasons__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.reasons__item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.reasons__sym').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      trigger.querySelector('.reasons__sym').textContent = '−';
    }
  });
});

// Accordion: FAQ
document.querySelectorAll('.faq__trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq__item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq__item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq__sym').textContent = '+';
    });
    if (!isOpen) {
      item.classList.add('open');
      trigger.querySelector('.faq__sym').textContent = '−';
    }
  });
});
