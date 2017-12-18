const Utils = window.Utils;
const $ = window.$;

let modalCount = 1;

export const updateCount = (count = modalCount + 1) => {
    return modalCount = count;
};

export const getId = ({idName = 'modal', index = modalCount}) => {
    return [idName, index].join('_');
};

export const getModalCount = () => {
    return modalCount;
};

export const init = ({
                         id = getId({index: updateCount()}),
                         className = 'base-modal',
                         animation = true,
                         hideOnMaskTap = true,
                         body = '',
                         bodyClassName = '',
                         event = 'click',
                         footer = [],
                         confirmText = '',
                         cancelText = '',
                         bodyHtml = renderBaseBody({
                             className: bodyClassName,
                             html: body
                         }),
                         footerHtml,
                         callback,
                         confirm,
                         cancel
                     }) => {
    if (!footerHtml) {
        let footerArr = [];
        if (cancelText) {
            footerArr.push({
                className: 'cancel',
                html: cancelText
            });
        }
        if (confirmText) {
            footerArr.push({
                className: 'confirm',
                html: confirmText
            });
        }
        footerArr.concat(footer);
        footerHtml = renderBaseFooter(footerArr);
    }
    Utils.modal.init({
        id,
        cls: className,
        animation,
        hideOnMaskTap,
        event,
        body: bodyHtml,
        footer: footerHtml,
        bindEvent() {
            /* $(this).on('click', 'div', function () {
                 if (callback) {
                     callback()
                 }
             });*/
        },
        confirm,
        cancel
    });
    return id;
};

export const renderBaseBody = (config) => {
    return '<div class="base-modal-body ' + config.className + '">' + config.html + '</div>';
};

export const renderBaseFooter = (config) => {
    return config.map((item) => {
        return '<div class="base-modal-footer ' + item.className + '">' + item.html + '</div>';
    }).join('');
};

export const show = (id) => {
    Utils.modal.show(id);
};

export const hide = (id) => {
    Utils.modal.hide(id);
};

export const destroy = (id) => {
    Utils.modal.destroy(id);
};

